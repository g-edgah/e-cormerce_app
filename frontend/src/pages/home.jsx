import FlowerCard from '../components/common/flowerCard.jsx'
import { FaAngleLeft } from "react-icons/fa6";

const HomePage = () => {
    return (
        <div className="flex flex-col space-y-10">

            <div className="bg-[url(/src/assets/bouquets/image_copy_5.png)] bg-cover bg-center bg-no-repeat w-full h-80 md:h-170 flex items-center">
                <div className="absolute left-5 md:left-10 flex flex-col space-y-3 md:space-y-5 w-70 md:w-130">
                    <span className='font-bold text-lg md:text-4xl'>design your own bouquet!</span>
                    <span className='text-sm'>customize everything from the flower types and colors to even wrapper for your bunch</span>
                    <button className=' md:text-md w-30 md:w-30 bg-summaryButtons rounded-lg h-10 text-white'>get started</button>
                    
                </div>
                
            </div>

            <div className="new flex flex-col items-center w-full space-y-5 justify-center">
                <span className=''>new arrivals</span>
                <div className="flex space-x-5">
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                </div>
                
            </div>

            <div className="relative flex flex-col spacing-y-4 items-center w-full px-5 md;px-15">
                <span>flowers for every occassion</span>
                full width except aesthetic spacing
                <div className=" occassions flex space-x-5 w-full justify-around overflow-x-auto">
                    <FaAngleLeft />
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FaAngleLeft />
                    
                </div>
            </div>
            <div className="flex flex-col spacing-y-4 items-center">
                <span>featured discounts</span>
               
                <div className="occassions flex space-x-5 w-full overflow-x-auto justify-center">
                
                    <div className="rounded-md h-60 w-104 bg-gray-300"></div>
                    <div className="rounded-md h-60 w-104 bg-gray-300"></div>
                    
                    
                </div>
            </div>
            
            <div className="popular flex flex-col space-y-5 items-center">
                <span>flying off the shelves</span>
                <div className="flower-row flex gap-5 w-full  flex-wrap justify-center items-center">
                
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    <FlowerCard name="yellow yellow" price="4200" image="bouquets/image.png"/>
                    
                </div>
            </div>
            
            <div className="bulk w-full flex justify-around">
                <div className="w-[95vw] bg-light-purple h-70 md:h-140 mb-10 rounded-lg flex justify-between items-center">
                    <div className='flex flex-col pl-3 md:pl-5 w-1/2 md:w-1/3 space-y-4'>
                        <span className='text-md md:text-2xl font-bold'>place a bulk order</span>
                        <span className='text-sm md:text-md'>do you have a large event or party coming up or you just want a lot of flowers? Reach out and we'll make it happen</span>
                        <span className="font-bold">learn more</span>
                    </div>
                    <div className='h-full w-1/2 rounded-r-lg bg-[url(/src/assets/bulk/image.png)] bg-cover bg-center bg-no-repeat'> </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default HomePage