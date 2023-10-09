import Testimonials from "../Testimonials/Testimonials";

const ItemCard = ({detailes}) => {

  const {  picture, name, description,  } = detailes || {};
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
      <img src={picture} alt="Shoes" className="rounded-xl w-full h-full" />
    
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify font-medium  border-black px-5 py-5 hover:border">{description}</p>
      </div>
    </div>
    <div className="mt-5 mb-5">
      <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Testimonials></Testimonials>
    </div>
    </div>
  );
};

export default ItemCard;




