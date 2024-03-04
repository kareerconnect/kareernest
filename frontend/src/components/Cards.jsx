import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Cards=(props)=> {
  const data=props.data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='w-11/12 m-auto'>
      <div className="mt-5">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="text-black rounded-xl shadow-xl">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.news}</p>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</a>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
};

export default Cards;