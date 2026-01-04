import { IoIosBasket } from "react-icons/io";

const FlowerCard = ({name, price, image}) => {
    return (
        <div className="relative h-73 md:h-120 w-42 min-w-42 md:w-75 md:min-w-75 bg-cartCard rounded-lg flex flex-col space-y-2 md:space-y-3">
            <img className='w-full md:h-98 rounded-lg' src={`/src/assets/${image}`} alt="flowers" />
            <div className="flex justify-between px-4 items-center">
                <div className="flex flex-col space-y-3">
                    <span className="text-sm md:text-md font-semibold name">{name}</span>
                    <span className="price text-sm md:text-md font-semibold ">ksh {price}</span>
                </div>
                <button className="absolute top-47 left-33 md:static  bg-gray-300 hover:text-white hover:bg-summaryButtons md:w-10 md:h-10 rounded-lg flex items-center justify-around">
                    <IoIosBasket className="w-7 h-7 md:w-8 md:h-8" />
                </button>
            </div>
            

        </div>
    )
}

export default FlowerCard;