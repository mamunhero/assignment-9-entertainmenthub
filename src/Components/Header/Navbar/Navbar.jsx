import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className>
        <ul className="flex  flex-col md:flex-row gap-5">
          <li>
            <NavLink  to="/" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline  text-2xl" : "text-2xl font-normal text-black"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/destination" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl" : " text-2xl font-normal text-black"}>Events</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl" : " text-2xl font-normal text-black"}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl" : " text-2xl font-normal text-black"}>Tickets</NavLink>
          </li>
          <NavLink  to="/login">
            <button className="text-white text-center text-2xl block px-5 gap-3 border  rounded-md bg-orange-500">Login</button>
          </NavLink>
        </ul>
        
      </nav>
      
    </div>
  );
};

export default Navbar;

