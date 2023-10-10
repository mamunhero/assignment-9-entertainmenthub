
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
    .then(result=> {
      console.log(result);
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div>
      <nav className>
        <ul className="flex  flex-col md:flex-row gap-5">
          <li>
            <NavLink  to="/" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline  text-2xl" : "text-2xl font-normal text-black"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/event" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl" : " text-2xl font-normal text-black"}>Events</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl" : " text-2xl font-normal text-black"}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/tickets" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl" : " text-2xl font-normal text-black"}>Tickets</NavLink>
          </li>
          {user ? (
        <button onClick={handleSignOut} className="text-white text-center text-2xl block px-5 gap-3 border rounded-md bg-orange-500">
          Sign Out
        </button>
      ) : (
        <NavLink to="/login">
          <button className="text-white text-center text-2xl block px-5 gap-3 border rounded-md bg-orange-500">
            Login
          </button>
        </NavLink>
      )}
       {user && <div>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <img src={user?.photoUrl} alt="" />
          </div> 
       }
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;



