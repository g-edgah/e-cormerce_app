import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useRef } from 'react';

const NavDrawer = ({handleNavDrawer}) =>{
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is NOT inside menu AND NOT on button, close menu
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
        <div ref={menuRef} className="drawer z-20 absolute top-0 left-0 h-130 w-70 bg-gray-400">
            <button ref={buttonRef} onClick={() => handleNavDrawer()} className="closeDrawer absolute top-2 left-2">
                < HiMiniXMark className="h-6 w-6"/>
            </button>
           
        </div>
    )
}

export default NavDrawer;