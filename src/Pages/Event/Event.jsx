import Logo from "../../Components/Header/Logo/Logo";
import eventone from "../../assets/eventone.jpg"
import eventtwo from "../../assets/eventtwo.jpg"
import eventthree from "../../assets/eventthree.jpg"
import eventfour from "../../assets/eventfour.jpg"
import eventfive from "../../assets/eventfive.jpg"
import eventsix from "../../assets/eventsix.jpg"



const Event = () => {
  return (
    <div className="mb-5">
      <Logo></Logo>
      <div className="bg-base-200">
  <div className="">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  <div className="card">
    <figure>
      <img src={eventone} alt="Shoes" className="w-full h-full object-cover" />
    </figure>
</div>

<div className="card">
    <figure>
      <img src={eventtwo} alt="Shoes" className="w-full h-full object-cover" />
    </figure>
</div>

<div className="card">
    <figure>
      <img src={eventthree} alt="Shoes" className="w-full h-full object-cover" />
    </figure>
</div>

<div className="card">
    <figure>
      <img src={eventfour} alt="Shoes" className="w-full h-full object-cover" />
    </figure>
</div>

<div className="card">
    <figure>
      <img src={eventfive} alt="Shoes" className="w-full h-full object-cover" />
    </figure>
</div>

<div className="card">
    <figure>
      <img src={eventsix} alt="Shoes" className="w-full h-full object-cover" />
    </figure>
</div>

  </div>
  </div>
</div>

    </div>
  );
};

export default Event;