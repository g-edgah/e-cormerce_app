import { Link } from 'react-router-dom';
import { PiFlowerLotusLight } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import { IoIosBasket } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import SearchBar from './searchBar';

const NavBar = () => {
    return (
        <>
            <div className="nav w-screen flex flex-col justify-around" >
                <div className="flex items-center justify-between py-4 pl-2 pr-5.5 xs:pr-7 xs:pl-4 md:px-10 lg:px-25 w-full md:w-full">
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
                    <div className="hidden md:flex space-x-6">
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >bouquets</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >flowers</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >occassions</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >colors</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >popular</Link>
                    </div>

                    {/* right */}
                    <div className="flex items-center space-x-4">
                        <SearchBar />
                        <Link to='/profile' className="hover:text-nav-hover">
                            <HiUser className="h-6 w-6 text-black-700"/>
                        </Link>
                        <button className="relative hover:text-nav-hover">
                            <IoIosBasket className="h-6 w-6 text-black-700"/>
                            <span className="absolute -top-1 bg-topbar text-white text-xs rounded-full px-2 py-0.5">0</span>
                            
                        </button >
                        
                    </div>  
                </div>

                <div className="flex justify-around px-1 md:hidden xs:space-x-6 xs:items-center xs:justify-center pb-4">
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >bouquets</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >flowers</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >occassions</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >colors</Link>
                        <Link className="text-700 hover:text-nav-hover text-sm font-medium" >popular</Link>
                    </div>
            </div>
        
        </>
    )
}

export default NavBar