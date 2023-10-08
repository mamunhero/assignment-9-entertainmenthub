
const Banner = () => {
  return (
    <div>
      
        {/* slider */}
        <div className="carousel w-full">
          {/* slider-one */}
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero" style={{backgroundImage: 'url(https://i.ibb.co/kh22KGf/bg-image-one.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 sm:text-2xl lg:text-5xl font-bold text-orange-500">Up Coming event</h1>
              <p className="mb-5 text-black font-semibold">Join us for an unforgettable evening of pure enchantment and non-stop fun at  Get ready to be transported to a world where imagination knows no bounds and where the thrill of entertainment meets the heart-pounding excitement of a lifetime.</p>
              {/* count down */}
              <div className="flex gap-5 justify-center items-center mb-5">
  <div>
    <span className="countdown  text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span className="countdown  text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span className="countdown  text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span className="countdown  text-4xl">
      <span style={{"--value":10}}></span>
    </span>
    sec
  </div>
</div>
              {/* button */}
              <button className="btn btn-primary">Buy Ticket</button>
            </div>
          </div>
        </div>



    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* slider-two */}
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/34hQFHN/bg-image-two.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 sm:text-2xl lg:text-5xl font-bold text-orange-500">Up Coming event</h1>
              <p className="mb-5 text-black font-semibold">Join us for an unforgettable evening of pure enchantment and non-stop fun at  Get ready to be transported to a world where imagination knows no bounds and where the thrill of entertainment meets the heart-pounding excitement of a lifetime.</p>
              {/* count down */}
              <div className="flex gap-5 justify-center items-center mb-5">
  <div>
    <span className="countdown  text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span className="countdown  text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span className="countdown  text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span className="countdown  text-4xl">
      <span style={{"--value":10}}></span>
    </span>
    sec
  </div>
</div>


              {/* button */}
              <button className="btn btn-primary">Buy Ticket</button>
            </div>
          </div>
        </div>




    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* slider-three */}
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/rcgPfp3/bg-image-three.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 sm:text-2xl lg:text-5xl font-bold text-orange-500">Up Coming Event</h1>
              <p className="mb-5 text-black font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              {/* count down */}
              <div className="flex gap-5 justify-center items-center mb-5">
  <div>
    <span className="countdown  text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span className="countdown  text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span className="countdown  text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span className="countdown  text-4xl">
      <span style={{"--value":10}}></span>
    </span>
    sec
  </div>
</div>

              {/* button */}
              <button className="btn btn-primary">Buy Ticket</button>
            </div>
          </div>
        </div>





    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    </div>
  );
};

export default Banner;

