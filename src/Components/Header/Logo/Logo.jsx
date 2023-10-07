import logo from "../../../assets/drum-set.png"
const Logo = () => {
  return (
    <div className="flex">
      <img className="w-14 h-14 mr-5" src={logo} alt="" />
      <h2 className="flex items-center text-2xl font-bold text-blue-500">Entertainment <span className="text-orange-500 uppercase">Hub</span></h2>
      
    </div>
  );
};

export default Logo;