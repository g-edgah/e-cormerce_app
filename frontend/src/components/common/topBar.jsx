import { TbBrandMeta } from 'react-icons/tb';

const TopBar = () => {
    return (
        <div className='bg-[#ea2e0e] text-white'>
            <div className='container mx-auto'>
                <div>
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar