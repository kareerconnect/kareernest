import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useVerifyOTP from '../../hooks/useVerifyOTP';

const OTPPage = () => {

  useEffect(() => {
    document.body.className = 'login-page';
    return () => {
      document.body.className = '';
    };
  }, []);

  const [otp, setOTP] = useState('');
  const { loading, verifyOTP, resendOTP } = useVerifyOTP();
  const navigate = useNavigate();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    await verifyOTP(otp);
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 min-h-screen mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">OTP Verification</h1>
        <form onSubmit={handleVerifyOTP}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-300">Enter OTP</span>
            </label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full input input-bordered h-10"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : 'Verify OTP'}
          </button>
          <button className="btn btn-block btn-sm mt-2" onClick={resendOTP} disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : 'Resend OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
