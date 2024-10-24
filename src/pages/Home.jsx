import { useNavigate } from "react-router-dom"
import { Nav } from "../components/Nav"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-[#fff4e6] min-h-screen">
                <Nav/>
                <div className="flex flex-col justify-center pt-12 p-8 ">
                    <div className="text-2xl pb-2">
                        Welcome to GiftCrafters - Personalized Gifts Made Just for You!
                    </div>
                    <div>
                        Discover a world of unique, customizable gifts designed to create unforgettable moments. Whether you’re celebrating birthdays, anniversaries, weddings, or any special occasion, we have the perfect gift to bring smiles to your loved ones.
                    </div>
                    <div className="text-2xl pb-2 pt-4">
                        AI-Powered Customization
                    </div>
                    <div>
                        Explore our advanced AI-powered tool that lets you visualize customized gifts in real-time. From engraving names to selecting unique designs, our AI will help you create the perfect gift that’s as special as your loved ones.
                    </div>
                    <div className="text-2xl pb-2 pt-4">
                        Why Choose Us?
                    </div>
                    <div className="pb-2">
                        Tailored to Perfection: Every gift is crafted with love and personalized just for you.
                    </div>
                    <div className="pb-2">
                        High-Quality Creations: From custom-made keepsakes to one-of-a-kind designs, we ensure quality in every detail.
                    </div>
                    <div className="pb-2">
                        Fast & Easy Customization: Create your perfect gift in just a few clicks!
                    </div>
                    <div className="text-2xl pb-2 pt-4">
                        Celebrate Life’s Special Moments
                    </div>
                    <div>
                        Browse through our curated collections and find the perfect gift that speaks from the heart. Personalize it, and we’ll take care of the rest!
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={(e)=>{navigate("/shop")}} className="bg-[#000] text-[#fff] p-4 text-lg rounded-3xl">
                        Shop Now
                    </button>
                </div>
            </div>
        </>
    )
}