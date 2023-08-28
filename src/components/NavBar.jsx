import { useDispatch } from 'react-redux'
import logo from '../assets/images/the-wall-row.png'
import { changeMessageStatus } from '../redux/messageSlice'

const NavBar = () => {
  const dispatch = useDispatch(); // Create a dispatch function

  return (
    <nav className="fixed flex items-center gap-4 sm:gap-8 w-full p-3 bg-white border-b-2 border-black">
      <img src={logo} alt='THE WALL' className='w-28' /> {/* Render the logo */}
      <button
        onClick={() => dispatch(changeMessageStatus(true))} // Dispatch the 'changeMessageStatus' action when the button is clicked
        className="flex items-center gap-3 border-2 border-gray-200 hover:border-black p-2 font-semibold italic"
      >
        Write a message <i className="bi bi-pencil-fill" /> {/* Render a button with an icon */}
      </button>
    </nav>
  );
};

export { NavBar };