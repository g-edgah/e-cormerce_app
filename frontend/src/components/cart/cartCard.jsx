import { FaRegTrashCan } from "react-icons/fa6";

const CartCard = ({id, name, price, quantity, image, handleChangeQuantity, handleDelete}) => {  
    const productPrice = price * quantity;

    return (
        <div className="container min-w-full h-35 md:min-w-45 md:max-w-45 justify-between md:h-70 bg-gray-200 p-2 rounded-md flex md:flex-col">

            <div className="image w-30 h-full md:w-full  md:h-40">
                <img className="rounded-md w-full h-full" src={`/src/assets/bouquets/${image}`} alt="product image" />
            </div>

            <div className="details flex flex-col space-y-1 mt-2 grow h-full text-md md:text-md items-center">

                <div className="name">
                    <span>{name}</span>
                </div>

                <div className="quantity mt-4 mb-5  md:mb-2.5 md:mt-2 flex items-center justify-center w-full flex-row gap-6">
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

                <div className="price">
                    <span>ksh {productPrice}</span>
                </div>
                
            </div>
        </div>
    )
}

export default CartCard