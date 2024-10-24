import { Card } from "../components/Card"
import { Nav } from "../components/Nav"
import img1 from '../assets/3.jpeg';
import img2 from '../assets/4.jpeg';
import img3 from '../assets/5.jpeg';
import img4 from '../assets/6.jpeg';
import img5 from '../assets/7.jpeg';
import img6 from '../assets/10.jpeg';
import img7 from '../assets/11.jpeg';
import img8 from '../assets/12.jpeg';
import img9 from '../assets/13.jpeg';
const images = [
    { img: img1, title: 'product1', price: '2000' },
    { img: img2, title: 'product2', price: '2500' },
    { img: img3, title: 'product3', price: '3000' },
    { img: img4, title: 'product4', price: '3000' },
    { img: img5, title: 'product5', price: '3000' },
    { img: img6, title: 'product6', price: '3000' },
    { img: img7, title: 'product7', price: '3000' },
    { img: img8, title: 'product8', price: '3000' },
    { img: img9, title: 'product9', price: '3000' },
  ];
export const Shop = () => {
    return (
        <div className="bg-[#fff4e6] min-h-screen">
            <Nav />
            <div className="flex flex-wrap justify-center">
                {images.map(({ img, title, price }, index) => (
                    <Card key={index} img={img} title={title} price={price} />
            ))}
      </div>
        </div>
    )
}