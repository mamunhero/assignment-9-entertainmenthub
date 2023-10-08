import Header from "../Components/Header/Header";
import cardimage from "../../src/assets/card-image.jpg"
import cardimageone from "../../src/assets/card-image-one.jpg"
import { useEffect, useState } from "react";
import CardInfo from "../Components/Cards/CardInfo";
import { FaMinus } from 'react-icons/fa';
import upcoming from "../../src/assets/show-7.jpg"
import upcomingtwo from "../../src/assets/show-6.jpg"
import upcomingthree from "../../src/assets/show-4.jpg"


const Home = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => setCard(data))
  }, []);
  // console.log(card);
  return (
    <div>
      <Header></Header>
      {/* card div */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-10 py-5">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={cardimage}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      Last Show
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Chart-Toppers Live in Concert
    </h4>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
      <p className="text-lg font-bold text-orange-600">Venue:</p>
      <span className="text-sm font-bold">Miami, USA</span>
      </div>
      <span className="font-bold">10/09/2023</span>
    </div>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        More
      </button>
    </a>
  </div>
</div>
 {/* second card  */}
 <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={cardimageone}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      Last Show
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Latin Dance Fiesta
    </h4>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
      <p className="text-lg font-bold text-orange-600">Venue:</p>
      <span className="text-sm font-bold">London, UK</span>
      </div>
      <span className="font-bold">20/09/2023</span>
    </div>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        More
      </button>
    </a>
  </div>
</div>

      </div>
      {/* service div */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl text-center font-bold mb-5">Our <span className="text-orange-600">Services</span></h2>
        {
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              card.map((cardDetailes)=>  <CardInfo
              key={cardDetailes.id} cardDetailes={cardDetailes}></CardInfo>)
            }
          </div>
        }
      </div>
      {/* Upcoming shows */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl text-center font-bold">Upcoming <span className="text-orange-600">shows</span></h2>
        <div className="flex grid sm:grid-cols-1 md:grid-cols-2 md:px-10 py-10">
          <div className="mb-5">
            <img src={upcoming} alt=""/>
          </div>
          <div className="mt-10 px-10 mr-10">
            <div className="flex justify-between mb-10">
              <button className="px-2 py-1 bg-gray-500 text-white block font-bold uppercase text-lg">World Music</button>
              <div className="flex items-center font-bold text-lg text-black">
                <span className="mr-5">15, Octobet, 2023</span>
                <FaMinus className="mr-5"></FaMinus>
                <span>10:00 AM</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-10">Light Up The Music</h2>
            <p className="text-xl font-medium mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="btn btn-primary mb-5">Buy Ticket</button>
          </div>
          {/* second card */}
          <div className="mb-5">
            <img src={upcomingtwo} alt=""/>
          </div>
          <div className="mt-10 px-10 mr-10">
            <div className="flex justify-between mb-10">
              <button className="px-2 py-1 bg-gray-500 text-white block font-bold uppercase text-lg">CIRCUS</button>
              <div className="flex items-center font-bold text-lg text-black">
                <span className="mr-5">25, Octobet, 2023</span>
                <FaMinus className="mr-5"></FaMinus>
                <span>09:00 AM</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-10">The Magical Nights</h2>
            <p className="text-xl font-medium mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="btn btn-primary mb-5">Buy Ticket</button>
          </div>
          {/* third card */}
          <div className="mb-5">
            <img src={upcomingthree} alt=""/>
          </div>
          <div className="mt-10 px-10 mr-10">
            <div className="flex justify-between  mb-10">
              <button className="px-2 py-1 bg-gray-500 text-white block font-bold uppercase text-lg">THEATER</button>
              <div className="flex items-center font-bold text-lg text-black">
                <span className="mr-5">30, Octobet, 2023</span>
                <FaMinus className="mr-5"></FaMinus>
                <span>10:00 AM</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-10">France Knight & Armour</h2>
            <p className="text-xl font-medium mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="btn btn-primary">Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
