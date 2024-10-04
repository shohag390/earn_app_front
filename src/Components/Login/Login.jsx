import { useContext, useState } from "react";
import image from "../../assets/Image/login.svg";
import { Link, useNavigate } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext.jsx";
import Add from "../../Pages/Add.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="md:h-[86vh] md:px-[150px] px-[20px] md:py-0 py-[25px] flex items-center justify-center md:font-[cursive] bg-[#ffd4b1]">
        <div className="w-full md:h-[70vh] md:flex md:justify-between">
          <div className="md:w-1/2 md:h-[70vh] bg-[#fffcfa] md:flex md:items-center md:justify-center md:rounded-s-[20px] hidden">
            <img className="h-[300px]" src={image} alt="" />
          </div>
          <div className="md:w-1/2 md:h-[70vh] bg-purple-900 md:rounded-e-[20px] md:rounded-none rounded-[20px] flex items-center justify-center flex-col p-[30px]">
            <h4 className="md:text-[25px] font-bold text-[#ffffff] pb-[10px]">
              Sign Up Now
            </h4>
            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center justify-center gap-[10px] w-full"
            >
              <div className="w-full">
                <input
                  className="py-[7px] px-[20px] w-full rounded-md input_style text-[#ffffff]"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="w-full">
                <input
                  className="py-[7px] px-[20px] w-full rounded-md input_style text-[#ffffff]"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Password"
                />
              </div>
              <div className="w-full mt-[3px]">
                <button
                  type="submit"
                  className="py-[7px] w-full bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
                >
                  {loading ? <RiseLoader size={6} color="#ffffff" /> : "Login"}
                </button>
              </div>
            </form>
            <p className="text-center md:w-[80%] md:pt-[10px] pt-[6px] text-[#ffffff] text-[18px]">
              Already have an account ?
              <Link
                to={"/signup"}
                className="pl-[5px] text-[#ff7300] hover:text-[#ff0000] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Add />
    </>
  );
};

export default Login;
