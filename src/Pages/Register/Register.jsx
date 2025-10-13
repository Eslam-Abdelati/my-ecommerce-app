import React, { useState } from "react";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import CircularProgress from "@mui/material/CircularProgress";

function Register() {
  const navigate = useNavigate();
  const [isShowPass, setIsShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name.trim()) return toast.error("Full Name is required");
    if (!email.trim()) return toast.error("Email is required");
    if (!password.trim()) return toast.error("Password is required");

    setLoading(true);

    setTimeout(() => {
      // 🔸 قراءة المستخدمين الحاليين من localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // 🔸 التأكد أن البريد غير مسجل مسبقًا
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        toast.error("Email already exists!");
        setLoading(false);
        return;
      }

      // 🔸 إنشاء مستخدم جديد
      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
      };

      // 🔸 حفظ المستخدمين في localStorage
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      toast.success("Account created successfully!");

      // 🔸 إعادة التوجيه إلى صفحة تسجيل الدخول
      navigate("/login");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-[600]">
            Register with a new account
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group w-full mb-5">
              <TextField
                type="text"
                id="name"
                name="name"
                label="Full Name"
                variant="outlined"
                className="w-full"
                disabled={loading}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                className="w-full"
                disabled={loading}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPass ? "text" : "password"}
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                className="w-full"
                disabled={loading}
                value={formData.password}
                onChange={handleChange}
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

            {/* Submit */}
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                className="btn-org btn-lg w-full flex gap-3 justify-center"
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
              </Button>
            </div>

            {/* Login link */}
            <p className="text-center mt-3 mb-3">
              Already have an account?{" "}
              <Link
                className="link text-[14px] font-[600] text-primary"
                to="/login"
              >
                Login
              </Link>
            </p>

            {/* Social */}
            <p className="text-center font-[500] mt-3 mb-3">
              Or continue with social account
            </p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black hover:!bg-[#e0e0e0] !capitalize">
              <FcGoogle className="text-[20px]" /> Sign Up with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
