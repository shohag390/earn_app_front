import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../../config";
import { TbPhotoUp } from "react-icons/tb";
import image from "../../assets/Image/login.svg";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import RiseLoader from "react-spinners/RiseLoader";
import { toast } from "react-toastify";
import Add from "../../Pages/Add";

const SignUp = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectFile,
    phone: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.err(err.message);
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
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Name"
                />
              </div>
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
              <div className="flex items-center w-full gap-[10px]">
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
                <div className="w-full">
                  <input
                    className="py-[7px] px-[20px] w-full rounded-md input_style text-[#ffffff]"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone No."
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-3">
                {selectFile && (
                  <img
                    src={previewURL}
                    className="md:w-[20%] w-[25%] border-[1px] border-[#ffffff20] h-[80px] rounded-md"
                    alt="image"
                  />
                )}
                <div className="relative w-full h-[80px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg,.png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full cursor-pointer py-[7px] px-[20px] rounded-md input_style text-[#ffffff]"
                  >
                    <TbPhotoUp className="text-[35px]" />
                    <span className="text-[18px] font-[400]">Select Photo</span>
                  </label>
                </div>
              </div>
              <div className="w-full mt-[3px]">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="py-[7px] w-full bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
                >
                  {loading ? (
                    <RiseLoader size={6} color="#ffffff" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
            <p className="text-center md:w-[80%] md:pt-[10px] pt-[6px] text-[#ffffff] text-[18px]">
              Already have an account ?
              <Link
                to={"/login"}
                className="pl-[5px] text-[#ff7300] hover:text-[#ff0000] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Add />
    </>
  );
};

export default SignUp;
