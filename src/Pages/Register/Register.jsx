import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Logo from "../../Components/Header/Logo/Logo";


const Register = () => {

  const {createUser} = useContext(AuthContext)


  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
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
      <h2 className="text-3xl text-center my-10">Register your account</h2>
      {/* login section  */}
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-5 mb-10 text-2xl ">Already Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/login">Login</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Register;

