import React, { useState } from "react";
import verifyImg from "../../assets/shield.png";
import OtpBox from "../../components/OtpBox/OtpBox";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  // جاي من Register.jsx
  const email = location.state?.email;
  const type = location.state?.type;

  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter the OTP");
    }

    try {
      if (type === "register") {
        const res = await axios.post(
          "http://localhost:3000/api/v1/users/verifyEmail",
          { email, otp },
          { withCredentials: true }
        );

        if (res.data.success) {
          toast.success("Email verified successfully 🎉");
          navigate("/login"); // ✅ يروح للوجين بعد الفيريفاي
        } else {
          toast.error(res.data.message || "OTP verification failed");
        }
      } else if (type === "forgot") {
        const res = await axios.post(
          "http://localhost:3000/api/v1/users/verifyResetOtp",
          { email, otp },
          { withCredentials: true }
        );

        if (res.data.success) {
          toast.success("Email verified successfully");
          navigate("/forgot-password", { state: { email } });
        } else {
          toast.error(res.data.message || "OTP verification failed");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // 🟢 Resend OTP
  const handleResend = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/resend-new-otp",
        { email },
        {
          withCredentials: true, // لو بتستخدم كوكيز
        }
      );
      if (res.data.success) {
        toast.success(res.data.message || "OTP Sent to Email successfully ");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <section className="section py-10">
      <div className="container ">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center ">
            <img src={verifyImg} alt="verify-shield" width="70" />
          </div>
          <h3 className="text-center text-[18px] text-black font-[600] mt-4 mb-1">
            Verify OTP
          </h3>
          <p className="text-center mt-0">
            OTP send to <span className="text-primary font-[500]">{email}</span>
          </p>

          <form action="" onSubmit={handleSubmit}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex flex-col items-center justify-center mt-4">
              <a
                className="link cursor-pointer text-[14px] font-[600] mb-2"
                onClick={handleResend}
              >
                Resend OTP?
              </a>
              <Button type="submit" className="w-full btn-org btn-lg">
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VerifyOTP;
