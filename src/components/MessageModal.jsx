import { useDispatch } from "react-redux";
import { changeMessageModalStatus } from "../redux/messageModalStatusSlice";
import { useState } from "react";

const MessageModal = () => {
  const dispatch = useDispatch(); // Create a dispatch function

  // Define and initialize state variables
  const [fontMenuStatus, setFontMenuStatus] = useState(false);
  const [colorMenuStatus, setColorMenuStatus] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [font, setFont] = useState("sans-serif");
  const [color, setColor] = useState("black");
  const [messageValue, setMessageValue] = useState("");
  const [signValue, setSignValue] = useState("");
  const [error, setError] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [postStatus, setPostStatus] = useState(false);

  // Define lists for font and color options
  const fontList = [
    "awesome",
    "bank-gothic",
    "basileus",
    "bauhaus",
    "bellefair",
    "bradley-hand",
    "brush-script",
    "cascadia-code",
    "daft-font",
    "digital-7",
    "ghosts",
    "harlow-solid",
    "kapital-kanji",
    "kartoons",
    "linkin-font",
    "ocr",
    "old-english",
    "pixel",
    "sans-serif",
  ];

  const colorList = [
    "black",
    "gray",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
  ];

  // Function to validate and handle message submission
  const writeMessage = () => {
    if (messageValue.length > 0) {
      setConfirmStatus(true);
      if (signValue === "") {
        setSignValue("Anonymous");
      }
    } else {
      setError(true);
    }
  };

  // Function to handle the form submission
  const handleSubmit = async () => {
    try {
      setPostStatus(true);
      // Define the data to be sent in the request body
      const data = {
        message: messageValue,
        sign: signValue,
        font: font,
        color: color,
      };

      // Set up the request options
      const options = {
        method: "POST", // Request method
        headers: {
          "Content-Type": "application/json", // JSON content type
        },
        body: JSON.stringify(data), // Convert data to JSON format
      };

      // Make the API request
      const response = await fetch(
        "https://the-wall-ua0c.onrender.com/api/v1/messages",
        options
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("The request was not successful");
      }

      // Convert the response to JSON format
      const result = await response.json();

      setConfirmStatus(false);
      dispatch(changeMessageModalStatus(false));

      console.log("API Response: New message posted", result);
    } catch (error) {
      setFetchError(error);
    }
  };

  return (
    <div className="fixed top-0 w-full h-screen bg-black/75 z-10 flex items-center justify-center p-5">
      <section className="relative w-full sm:w-3/4 md:w-3/5 bg-white rounded-sm px-3 py-5 sm:px-5 flex flex-col gap-2">
        <h2 className="self-center text-xl sm:text-2xl font-medium italic opacity-80">
          Write a message to the world.
        </h2>
        <form className="flex flex-col gap-3">
          <div className="flex gap-3">
            <section className="flex flex-col gap-2 w-1/2">
              <label
                htmlFor="message"
                className="opacity-75 font-medium italic"
              >
                Message:
              </label>
              <textarea
                value={messageValue}
                onChange={(e) => {
                  setMessageValue(e.target.value);
                  setError(false);
                }}
                id="message"
                className={`p-3 italic font-medium ${font}-font ${color}-color placeholder:font-sans h-24 min-h max-h-96 border-2 ${
                  error &&
                  "border-red-500 focus:outline-red-500 hover:border-red-500"
                } hover:border-black rounded-sm`}
                placeholder="Write a message..."
              />
              {error && (
                <p className="text-red-500 text-sm italic">
                  {"Can't be blank"}
                </p>
              )}
              <label htmlFor="sign" className="opacity-75 font-medium italic">
                Sign:
              </label>
              <input
                value={signValue}
                onChange={(e) => setSignValue(e.target.value)}
                id="sign"
                maxLength={30}
                className={`p-2 italic font-medium ${font}-font ${color}-color placeholder:text-inherit placeholder:opacity-40 w-2/3 md:w-1/2 border-2 hover:border-black rounded-sm`}
                placeholder="Anonymous"
              />
            </section>
            <section className="w-1/2 flex gap-2">
              <div className="w-1/2 flex flex-col gap-2">
                <label htmlFor="font" className="opacity-75 font-medium italic">
                  Font:
                </label>
                <div>
                  <button
                    id="font"
                    type="button"
                    className={`w-full border-2 border-gray-200 hover:border-black py-1 px-1 sm:px-2 text-xs sm:text-base font-semibold italic ${font}-font`}
                    onClick={() => setFontMenuStatus((prev) => !prev)}
                  >
                    {font[0].toUpperCase()}
                    {font.slice(1)}
                  </button>
                  {fontMenuStatus && (
                    <section className="border-2 border-gray-200 p-1 pb-2 h-56 overflow-y-scroll">
                      {fontList.map((f) => (
                        <div
                          key={f}
                          onClick={() => setFont(f)}
                          className={`${f}-font text-xs sm:text-base italic font-semibold cursor-pointer hover:opacity-80 border-b-2`}
                        >
                          {f[0].toUpperCase()}
                          {f.slice(1)}
                        </div>
                      ))}
                    </section>
                  )}
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label
                  htmlFor="color"
                  className="opacity-75 font-medium italic"
                >
                  Color:
                </label>
                <div>
                  <button
                    id="color"
                    type="button"
                    className={`w-full border-2 border-gray-200 hover:border-black py-1 px-1 sm:px-2 text-xs sm:text-base font-semibold italic ${color}-color`}
                    onClick={() => setColorMenuStatus((prev) => !prev)}
                  >
                    {color[0].toUpperCase()}
                    {color.slice(1)} <i className="bi bi-pencil-fill" />
                  </button>
                  {colorMenuStatus && (
                    <section className="border-2 border-gray-200 p-1 pb-2 h-56 overflow-y-scroll">
                      {colorList.map((c) => (
                        <div
                          key={c}
                          onClick={() => setColor(c)}
                          className={`flex justify-between ${c}-color italic font-semibold text-xs sm:text-base cursor-pointer hover:opacity-80 border-b-2`}
                        >
                          {c[0].toUpperCase()}
                          {c.slice(1)}
                          <i className={`bi bi-pencil-fill`} />
                        </div>
                      ))}
                    </section>
                  )}
                </div>
              </div>
            </section>
          </div>
          <button
            onClick={confirmStatus ? handleSubmit : writeMessage}
            className="flex items-center self-end gap-3 border-2 border-gray-200 bg-white hover:border-black p-2 font-semibold italic z-10"
            type="button"
          >
            Write <i className="bi bi-pencil-fill" />
          </button>
          {confirmStatus && (
            <section className="absolute top-0 left-0 preview w-full h-full flex items-center justify-center bg-black overflow-auto">
              {fetchError ? (
                <p className="absolute top-16 text-red-500 italic">
                  Error: {fetchError.message}
                </p>
              ) : (
                <div
                  className={`absolute top-16 ${font}-font ${color}-color w-fit max-w-1/2 px-10 sm:px-20 pb-20 font-medium italic flex flex-col`}
                >
                  <p className="text-3xl">{messageValue}</p>
                  <p className="text-2xl self-end">-{signValue}</p>
                </div>
              )}
            </section>
          )}
          {confirmStatus && (
            <>
              <h2 className="absolute top-3 left-3 text-2xl font-medium italic opacity-80">
                Preview:
              </h2>
              <p className="absolute bottom-3 w-2/3 text-xs font-medium italic opacity-80">
                This message will be permanently posted on THE WALL and cannot
                be deleted.
              </p>
              {postStatus && (
                <p className="absolute right-6 bottom-20 italic font-medium opacity-30">
                  Writing<span className="dot1">.</span>
                  <span className="dot2">.</span>
                  <span className="dot3">.</span>
                </p>
              )}
            </>
          )}
        </form>
        <button
          onClick={
            confirmStatus
              ? () => setConfirmStatus(false)
              : () => dispatch(changeMessageModalStatus(false))
          }
          className={`absolute top-3 ${
            confirmStatus
              ? "bg-black text-white p-2 rounded-sm bi bi-arrow-left right-3 sm:right-5"
              : "bi bi-x-circle-fill text-3xl right-3"
          } cursor-pointer opacity-80 hover:opacity-100`}
        >
          {confirmStatus && " Back"}
        </button>
      </section>
    </div>
  );
};

export { MessageModal };
