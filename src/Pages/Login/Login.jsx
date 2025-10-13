import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
import { AppContext } from "../../context/AppContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AppContext); // 👈 استخدام الكونتكست
  const [isShowPass, setIsShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email.trim()) return toast.error("Email is required");
    if (!password.trim()) return toast.error("Password is required");

    setLoading(true);

    setTimeout(() => {
      // جلب المستخدمين من localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // البحث عن المستخدم
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        toast.error("Invalid email or password");
        setLoading(false);
        return;
      }

      // 👈 تسجيل الدخول في الكونتكست (يحفظ أيضًا في localStorage)
      login(user);

      toast.success(`Welcome back, ${user.name}!`);

      // إعادة التوجيه
      navigate("/");

      setLoading(false);
    }, 1000);
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-[600]">
            Login to your account
          </h3>
          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                name="email"
                type="email"
                value={formData.email}
                id="email"
                label="Email"
                variant="outlined"
                className="w-full"
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPass ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                label="Password"
                variant="outlined"
                className="w-full"
                onChange={handleChange}
                disabled={loading}
              />
              <Button
                type="button"
                className="!absolute top-[15%] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPass(!isShowPass)}
              >
                {isShowPass ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={loading}
                className="btn-org btn-lg w-full flex gap-3 justify-center"
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </div>

            <p className="text-center mt-3 mb-3">
              Not Registered?{" "}
              <Link className="link text-[14px] font-[600] text-primary" to="/register">
                Sign Up
              </Link>
            </p>

            <p className="text-center font-[500] mt-3 mb-3">
              Or continue with social account
            </p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black hover:!bg-[#e0e0e0] !capitalize ">
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
