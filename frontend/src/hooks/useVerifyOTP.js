import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useVerifyOTP = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyOTP = async (otp) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify", { method: "POST", body: JSON.stringify({ otp }) });

      if (res.ok) {
        const data = await res.json();
        toast.success('OTP verified successfully');
        if (data.user.isVerified) {
          navigate('/login');
        }
      } else {
        throw new Error('Failed to verify OTP');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/resend-otp", { method: "POST" });

      if (res.ok) {
        toast.success('OTP resent successfully');
      } else {
        throw new Error('Failed to resend OTP');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  return { loading, verifyOTP, resendOTP };
};

export default useVerifyOTP;
