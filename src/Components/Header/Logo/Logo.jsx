import logo from "../../../assets/drum-set.png"
import Navbar from "../Navbar/Navbar";
const Logo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-2 py-2  rounded-lg">
      <div className="flex ml-5">
        <img className="w-14 h-14 mr-5" src={logo} alt="" />
        <h2 className="flex items-center text-2xl font-bold text-blue-500">Entertainment <span className="text-orange-500 uppercase">Hub</span></h2>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Logo;