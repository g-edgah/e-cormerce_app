import { IoIosBasket } from "react-icons/io";

const OccassionCard = ({title, text, image}) => {
    return (
        <div className={`relative snap-center h-73 md:h-150 w-[95vw] min-w-[95vw] md:w-234 md:min-w-234 bg-cartCard rounded-lg flex flex-col space-y-2 md:space-y-3 ${image} bg-cover bg-center bg-no-repeat`}>
            <div className="text backdrop-blur-md bg-pink-400/10 border border-white/20 shadow-lg flex flex-col absolute bottom-0 h-20 md:h-30 w-full justify-center space-y-2 md:space-y-3 items-center text-gray-100">
                <span className="title font-bold text-lg">{title}</span>
                <span className="text">{text}</span>
            </div>
                    
        </div>
    )
}

export default OccassionCard 