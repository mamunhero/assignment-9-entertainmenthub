import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Components/Header/Logo/Logo";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";


const Login = () => {
  const {createSignIn, googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (email, password) {
      createSignIn(email, password)
      .then(result=> {
      console.log(result.user);
      swal("Good Job!", "Login is suceessful", "success")
      // navigate
      navigate(location?.state ? location.state : "/")
    })
    .catch(error=> {
      console.log(error.message);
      swal( "Error",error.message, "error")
    })
  }
      
    }
    

  // googlesignIn
  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result=> {
      console.log(result.user);
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div>
      <Logo></Logo>
      <div>
      <div>
      <h2 className="text-3xl text-center my-10">Login your account</h2>
      {/* login section  */}
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
        </div>
        <div className="form-control mt-6">
         
            <button className="btn btn-primary w-full">Login</button>
          
        </div>
        <button onClick={handleGoogleLogin} className="btn btn-primary mt-4 w-full">Google Login</button>
      </form>
      <p className="text-center mt-5 text-2xl ">Donot Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/register">Register</Link></p>
      </div>
  
      </div>
    </div>
  );
};

export default Login;

