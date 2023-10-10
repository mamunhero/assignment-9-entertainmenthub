import Logo from "../../Components/Header/Logo/Logo";

const Services = () => {
  return (
    <div className="mb-5">
      <Logo></Logo>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/cN4JRzW/42nd-st-1-copy-wide.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Theater Show</h1>
      <p className="mb-5">It seems like you're looking for information or assistance related to theater events. Please provide more specific details or questions about theater events, and I'll be happy to help you further. Whether you need information about upcoming theater events, tips on attending theater events, or anything else related to theater events, feel free to ask, and I'll do my best to assist you.</p>
      <button className="btn btn-primary">Buy Ticket</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;