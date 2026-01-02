import { TbBrandMeta } from 'react-icons/tb';
import  { IoLogoInstagram } from 'react-icons/io5';
import  { RiTwitterXLine } from 'react-icons/ri';
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiFlowerLotusLight } from "react-icons/pi";


const Footer = () => {

    const handleEmailSubmit = () => {
        //submit logic
    }

    return (
        <div className="footer fixed bottom-0 bg-footer w-screen  text-footerText pt-10 mx-auto flex flex-col gap-10 items-center p-4">

            <div className="newsletter space-y-3 flex flex-col max-w-150" >

                    <span className="text-md font-bold text-footerTextTitle">newsletter</span>

                    <span className="text-footerText font-md text-sm">
                        be the first to know about everything uaridi from new products to exclusive events and discounts
                    </span>
                    <span className='text-footerText font-md text-sm'>sign up and get 20% off on your first bouquet</span>

                    <form onSubmit={()=>handleEmailSubmit()} className="flex">
                        <input className='w-full border border-gray-400 bg-gray-200 p-3 text-sm focus:outline-none rounded-md transition-all text-topbar' 
                        type="text"
                        placeholder='enter your email' />
                        <button type='submit' className='text-white bg-topbar rounded-lg ml-4 w-35 text-sm hover:bg-red-900 transition-all'>subscribe</button>
                    </form>
                </div>

            <div className=" container w-full flex flex-wrap justify-between md:justify-around">

                
                <div className="shop space-y-2 flex flex-col ">
                    <span className="text-md font-bold text-footerTextTitle mb-2" >shop</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>popular</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>bouquets</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>flowers</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>occassions</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>colors</span>
                </div>

                <div className="support space-y-2 flex flex-col">
                    <span className="text-md font-bold text-footerTextTitle">support</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>contact us</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>about us</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>FAQs</span>
                    <span className='cursor-pointer hover:text-footerTextTitle text-sm'>features</span>

                </div>

                <div className='contacts space-y-3 flex flex-col'>
                    <span className="text-md font-bold text-footerTextTitle mb-">keep up with us</span>

                    <div className="socials flex space-x-4">
                        <a href="#" className='hover:text-gray-300'>
                            <TbBrandMeta className='h-5 w-5 hover:text-footerTextTitle'/>
                        </a>
                        <a href="#" className='hover:text-gray-300'>
                            <IoLogoInstagram className='h-5 w-5 hover:text-footerTextTitle'/>
                        </a>
                        <a href="#" className='hover:text-gray-300'>
                            <RiTwitterXLine className='h-5 w-5 hover:text-footerTextTitle'/>
                        </a>
                    </div>
                    <div className="phone text-sm">
                        <span className=''>call us</span>
                        <span className='flex items-center hover:text-footerTextTitle cursor-pointer'> <MdOutlineLocalPhone /> +0 (000) 123-456</span>
                    </div>
                </div>

            </div>
            <div className='w-full text-sm flex grow text-one'>
                <div className='flex flex-row items-center w-full justify-center space-x-1'>
                    <span className='text-xs'>@2026</span> 
                    <span className='flex flex-row items-center'><PiFlowerLotusLight className='h-4 w-4 pt-0.5'/> uaridi. all rights reserved.</span></div>
            </div>
            
        </div>
    )
}

export default Footer