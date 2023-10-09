import { Link } from "react-router-dom";
import Logo from "../../Components/Header/Logo/Logo";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const {createSignIn, googleSignIn} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createSignIn(email, password)
    .then(result=> {
      console.log(result);
    })
    .catch(error=> {
      console.log(error);
    })
  }

  // googlesignIn
  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result=> {
      console.log(result);
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleLogin} className="btn btn-primary mt-4">Google Login</button>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl ">Donot Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/register">Register</Link></p>
      </div>
  
      </div>
    </div>
  );
};

export default Login;

