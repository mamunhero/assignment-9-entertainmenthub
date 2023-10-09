import { useEffect, useState } from "react";
import Logo from "../Header/Logo/Logo";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";


const SingleCard = () => {
  const [detailes, setDetailes] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    fetch("/data.json")
    .then(response=> response.json())
    .then(data=> {
      const card = data.find (item=> item.id == id) || {}
      setDetailes(card)
    })
  },[])
  // console.log(detailes);
  
  
  return (
    <div>
      <Logo></Logo>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/rk201vs/clown-852493-640.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Entertainment Hub</h1>
      <p className="mb-5">It seems like you're looking for information about an entertainment hub or platform. However, your request is a bit vague. Entertainment hubs can refer to various things, such as live Music, Sports Events, or physical locations like theaters or amusement parks. To provide you with more specific information, could you please clarify what you're looking for? Are you interested in a particular type of entertainment hub, a specific platform, or something else related to entertainment?</p>
      <button className="btn btn-primary">Buy Ticket</button>
    </div>
  </div>
</div>
    
        {
          <ItemCard detailes={detailes}></ItemCard>
        }
    </div>
  );
};

export default SingleCard;
