import { Link } from "react-router-dom"

export const Card = ({img, title, price}) => {
    return (
        <Link to={`/buy/${title}`} state={{ img, title, price }} className="h-[300px] w-[300px] m-2 p-4 bg-[#f2d9b8] rounded-xl">
            <div className="w-full h-[80%] pb-2">
                <img src={img} className="z-0 w-full h-full rounded-md object-cover"/>
            </div>
            <div className="text-xl">
                {title}
            </div>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>
                {price}
            </div>
        </Link>
    )
}