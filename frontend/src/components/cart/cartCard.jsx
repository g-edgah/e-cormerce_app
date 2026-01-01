import { FaRegTrashCan } from "react-icons/fa6";

const CartCard = ({id, name, price, quantity, image, handleChangeQuantity, handleDelete}) => {  
    const productPrice = price * quantity;

    return (
        <div className="container min-w-full h-35 md:min-w-47 md:max-w-47 justify-between md:h-78 bg-cartCard p-2 rounded-md flex md:flex-col">

            <div className="image h-full aspect-[1/1.1] md:w-full  md:aspect-[1/1.1]">
                <img className="rounded-md w-full h-full" src={`/src/assets/bouquets/${image}`} alt="product image" />
            </div>

            <div className="details flex flex-col justify-between mt-2 grow h-full text-md md:text-md items-center">

                <div className="name text-[16px] font-semibold md:font-semibold">
                    <span>{name}</span>
                </div>

                <div className="quantity mt-5 mb-5  md:mb-3 md:mt-3 flex items-center justify-center w-full flex-row gap-6">
                    <button onClick={() => {handleDelete(id)}} className="text-red-900 cursor-pointer">
                        <FaRegTrashCan className="h-5 w-5"/>
                    </button>

                    <button onClick={() => {handleChangeQuantity(0)}} className="text-lg w-6 h-6 bg-gray-400 pb-0.5 rounded-md flex justify-around items-center cursor-pointer"> -
                    </button>
                    
                    <div className="p-x-3 flex items-center">
                        <span className="text-center">{quantity}</span>
                    </div>

                    <button onClick={() => {handleChangeQuantity(1)}} className="text-lg w-6 h-6 bg-gray-400 pb-0.5 rounded-md flex justify-around items-center cursor-pointer">+
                    </button>
                </div>

                <div className="price mb-2 md:mb-0">
                    <span>ksh</span> <span className="font-bold"> {productPrice.toLocaleString()}</span>
                </div>
                
            </div>
        </div>
    )
}

export default CartCard