import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import CartHeader from '../components/cart/cartHeader.jsx';
import CartCard from '../components/cart/cartCard.jsx';

const CartPage = () => {
    const Navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [couponCode, setCouponCode] = useState('');
    const [cartTotal, setCartTotal] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [shippingLocation, setShippingLocation] = useState('');
    const [shippingCost, setShippingCost] = useState(0);

    const getCartTotal = () => {
        // Logic to calculate cart total
    }

    const getTotalAmount = () => {
        // Logic to calculate total amount
    }

    const handleCoupon = (e) => {
        e.preventDefault();
        // Logic to apply coupon
        getTotalAmount();
    }

    const handleCheckout = () => {
        // Logic to handle checkout
    }


    const getCartItems = () => {
        // Logic to fetch cart items
    }

    useEffect(() => {
        getCartItems();
    }, []);


    return (
        <div className="h-full w-full flex flex-col space-y-5 items-center">
            <CartHeader />
            {cartItems.length !== 0 ? (
                <div className="emptyCart w-full h-[50vh] flex flex-col items-center space-y-10 justify-center mt-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-medium">your cart is empty</h2>
                        <p className="text-gray-600">looks like you haven't added anything to your cart yet.</p>
                    </div>
                    
                    <button className="bg-gray-400 w-50 h-10 rounded-lg hover:bg-gray-500 hover:shadow-md hover:shadow-black transition" onClick={()=> Navigate('/')}>start shopping</button>
                </div>
            ) : (
                <div className='h-full w-full flex flex-col space-y-5 items-center'>
                    <div className="productContainer flex flex-col md:flex-row md:space-x-6 lg:space-x-12 mx-auto  md:px-10 lg:px-25 min-h-[45vh] overflow-y-auto w-[95vw]">
                        <div className="cartProducts grow p-4 overflow-y-auto">
                        
                            <div>
                                {cartItems.map(
                                    ({
                                        _id,
                                        name,
                                        price,
                                        quantity,
                                        image,
                                    }) => (
                                    <CartCard key={item.id} item={item} />
                                ))}
                            </div>
                            
                        </div>
                    </div>

                    <div className="summaryContainer flex flex-col w-full max-w-[95vw] mx-auto p-4 md:p-6 space-y-2 md:space-y-6 bg-gray-200 rounded-lg">
                        <div className="cartTotal">
                            <span>cart total: {cartTotal}</span>
                        </div>

                        <div className="coupon">
                            <form onSubmit={handleCoupon}></form>
                            <input 
                                className="p-2 bg-white w-50 h-10 rounded-md border border-gray-400"
                                type="text" 
                                placeholder="enter your coupon code" 
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button className='ml-4 bg-gray-400 w-20 h-9.5 md:h-10 rounded-md hover:bg-gray-500 transition'>apply</button>
                        </div>

                        <div className="payableAmount flex flex-col space-y-2 md:space-y-4">
                            <span>shipping to {shippingLocation}: {shippingCost}</span>
                            <span>total payable: {totalPayable}</span>
                            <button className='bg-gray-400 w-50 h-9.5 md:h-10 rounded-md hover:bg-gray-500 transition'>change order details</button>
                        </div>

                    </div>

                    <div className="cartActions w-[95vw] mx-auto justify-center flex flex-row space-x-5 md:space-x-16">
                        <button className="bg-white ring-1 hover:bg-gray-450 w-50 h-10 rounded-xl hover:shadow-md hover:shadow-gray-600 transition" onClick={()=> Navigate('/')}>continue shopping</button>
                        <button className="bg-gray-400 ring-1 w-50 h-10 rounded-xl hover:shadow-md hover:shadow-gray-600 hover:bg-gray-500 transition">checkout</button>
                        
                    </div>
                </div>
            )}
        </div> 
    )
}

export default CartPage