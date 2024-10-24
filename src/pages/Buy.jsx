import { useParams, useLocation } from 'react-router-dom';
import { Nav } from '../components/Nav';
export const Buy = () => {
    const location = useLocation(); // Get data passed via Link
    const { img, title, price } = location.state; // Destructure the state passed through the Link

    return (
        <div className="bg-[#fff4e6] min-h-screen">
            <Nav />
            <div className="flex flex-col lg:flex-row items-center justify-center p-6 gap-10">
                {/* Image Container */}
                <div className="w-full lg:w-1/2 max-w-lg">
                    <img 
                        src={img} 
                        alt={title} 
                        className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col items-start text-left">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-xl mb-6">Price: ₹{price}</p>
                    <button className="bg-[#ff967b] hover:bg-[#ffbca4] text-white py-2 px-6 rounded-lg mb-6">
                        Buy Now
                    </button>
                    <h2>Want to see the customized product with our inhouse AI feature</h2>
                    <button className="bg-[#ff967b] hover:bg-[#ffbca4] text-white py-2 px-6 rounded-lg mt-2 mb-4">
                        Press Here
                    </button>
                    <h2>Check Delivery Date</h2>
                    <div>
                        <input type="number" placeholder='Enter Pincode' className='mt-2 p-2'/>
                        <button className="bg-[#ff967b] hover:bg-[#ffbca4] text-white py-2 px-6 rounded-lg mt-2 mb-4">
                            Check
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}