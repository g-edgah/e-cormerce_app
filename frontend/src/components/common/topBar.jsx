import { TbBrandMeta } from 'react-icons/tb';
import  { IoLogoInstagram } from 'react-icons/io5';
import  { RiTwitterXLine } from 'react-icons/ri';

const TopBar = () => {
    return (
        <div className='bg-custom-red text-white'>
            <div className='container mx-auto flex justify-between items-center py-3 px-4'>
                <div className='hidden md:flex items-center space-x-4'>
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className='h-5 w-5'/>
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-5 w-5'/>
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-5 w-5'/>
                    </a>
                </div>
                <div className="text-sm text-center flex-grow">
                    <span>we ship worldwide fast and reliably!</span>
                </div>
                <div className="text-sm hidden md:block">
                    <a href="tel:+00012345678" className='hover:text-gray-300'>
                        +0 (000) 123-456
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar