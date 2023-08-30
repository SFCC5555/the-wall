import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Wall = () => {
    
  const messageModalStatus = useSelector(state=>state.message);
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://the-wall-ua0c.onrender.com/api/v1/messages';

    // Asynchronous function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make the API request using fetch and await
        const response = await fetch(apiUrl);

        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error('Network error');
        }

        // Convert the response to JSON format
        const data = await response.json();

        // Store the data in the state
        setMessages(data.messages);
      } catch (error) {
        // Handle errors
        setError(error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [messageModalStatus]); // The empty array [] ensures this effect runs only once when the component mounts
  
    // Render the Wall section
    return (
      <>
        {error?
          <p className="pt-20 p-8" >Error: {error.message}</p>
          :<section className="wall pt-20 p-4 sm:p-8 sm:pt-20 flex flex-wrap content-start gap-3 sm:gap-5">
          {messages?messages.map((m) => (
            <div key={m._id} className={`${m.font}-font ${m.color}-color max-w h-fit p-2 font-medium italic flex flex-col overflow-hidden`}>
              <p className="text-2xl">{m.message}</p> {/* Render the message content */}
              <p className="text-sm self-end">-{m.sign}</p> {/* Render the author's name */}
            </div>
          )):<p className="text-xl italic opacity-50" >Loading...</p>}
        </section>}
      </>

    );
  };
  
  export { Wall }; // Export the Wall component