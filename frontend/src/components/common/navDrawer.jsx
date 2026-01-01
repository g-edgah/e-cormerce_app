import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useRef } from 'react';

const NavDrawer = ({handleNavDrawer}) =>{
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
      //if click is NOT inside menu AND NOT on button, close menu
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        handleNavDrawer();
      }
    };

        //event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        //cleanup
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
      // this first div covers the ntire screen but stays transparent so that when a user clicks outside the menu the menu closes without clicking what's underneath the useEffect then handles closing the menu
      <div className="absolute top-0 z-19 left-0 w-screen h-screen bg-none ">
        <div ref={menuRef} className="drawer z-20 absolute -top-2 left-0 h-130 w-70 bg-gray-400 rounded-br-lg">
            <button ref={buttonRef} onClick={() => handleNavDrawer()} className="closeDrawer absolute top-2 left-2">
                < HiMiniXMark className="h-6 w-6"/>
            </button>
           
        </div>
      </div>
    )
}

export default NavDrawer;