import { Link, useNavigate } from 'react-router-dom';
import { PiFlowerLotusLight } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosBasket } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { useState } from 'react';

import CartSearchBar from './cartSearchBar';

const CartNavBar = () => {
    const navigate = useNavigate();
    const [isSearch, setIsSearch] = useState(false);

    
    return (
        <>
            <div className={`nav w-screen flex flex-col justify-around pt-2 pb-1 md:pt-3 bg-gray-200 relative ${isSearch ? 'h-27 md:h-23' : 'h-20 md:h-23'}`} >
                <div className="flex items-center justify-between pl-2 pr-5.5 xs:pr-7 xs:pl-4 md:px-10 lg:px-25 w-full md:w-full absolute top-2 md:top-7 h-10">
                    {/* left */}
                    <div className='flex items-center space-x-4 '>
                        <button className='md:hidden'>
                                <BiMenu className="h-6 w-6 text-black-700"/>
                        </button>

                        <Link to='/' className="text-2xl font-medium flex items-center space-x-0.5 hover:text-nav-hover">
                            <PiFlowerLotusLight />
                            <span className="mb-1"> uaridi</span>
                        </Link>
                    </div>

                    {/* center */}
                    {(isSearch) && (
                        <div className="hidden md:flex justify-center w-300">
                            <CartSearchBar isSearch={isSearch} setIsSearch={setIsSearch}/>
                        </div>
                    )}
                    

                    {/* right */}
                    <div className="flex items-center space-x-4">
                        <div className={`hover:text-nav-hover ${isSearch ? 'hidden md:flex' : 'flex'}`}>
                            {isSearch ? (
                                <button onClick={()=> setIsSearch(!isSearch)}>
                                    <HiMiniXMark className="h-6 w-6"/>
                                </button>
                            ) : (
                                <button onClick={()=> setIsSearch(!isSearch)}>
                                    <ImSearch className="h-5 w-5"/>
                                </button>
                            )}
                        </div>
                        <Link to='/profile' className="hover:text-nav-hover">
                            <HiUser className="h-6 w-6 text-black-700"/>
                        </Link>
                        <button onClick={() => navigate('/cart')} className="relative hover:text-nav-hover ">
                            <IoIosBasket className="h-6 w-6 text-black-700"/>
                            <span className="absolute -top-1 bg-topbar text-white text-xs rounded-full px-2 py-0.5">0</span>
                            
                        </button >
                        
                    </div>  
                </div>
                <div className={`${isSearch ? 'flex md:hidden justify-center mt-2 absolute bottom-3 md:top-2/4 w-full' : 'hidden'}`}>
                    <CartSearchBar isSearch={isSearch} setIsSearch={setIsSearch}/>
                </div>
                
            </div>
        
        </>
    )
}

export default CartNavBar