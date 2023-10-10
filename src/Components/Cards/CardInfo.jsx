import { Link } from "react-router-dom";


const CardInfo = ({cardDetailes}) => {
  // console.log(cardDetailes);
  const { id, picture, name, short_description, price } = cardDetailes || {}
  
  return (
    <div>
      <div className="card card-compact h-full bg-base-100 shadow-xl">
  <figure>
    <img src={picture} alt="Movie" style={{ width: '100%', height: '100%' }} />
    </figure>
  <div className="card-body">
    <h2 className="card-title text-center">{name}</h2>
    <p className="text-justify">{short_description}</p>
    <span className="font-bold text-xl">Price:{price}</span>
    <div className="card-actions">
      <Link to={`/data/${id}`}>
        <button className="btn btn-primary">Detailes</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CardInfo;





