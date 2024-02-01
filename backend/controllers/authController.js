const authService = require('../services/authService');

const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const otp = await authService.signupUser(email, username, password);
    res.json({ message: 'User signed up successfully. Check your email for verification.' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const verify = async (req, res) => {
  try {
    const { userId, enteredOTP } = req.body;
    const user = await authService.verifyUser(userId, enteredOTP);
    res.json({ message: 'User verified successfully', user });
  } catch (error) {
    if (error.message === 'Incorrect OTP') {
      res.status(400).json({ error: 'Incorrect OTP. Please enter the correct OTP.' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

const resendOTP = async (req, res) => {
  try {
    const { userId } = req.body;
    const newOTP = await authService.resendOTP(userId);
    res.json({ message: 'OTP resent successfully. Check your email for the new OTP.' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await authService.loginUser(email, password);
      const token = authService.generateAuthToken(user);
      res.json({ message: 'User logged in successfully', token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(401).json({ error: 'Invalid credentials' });
    }
};

module.exports = {
  signup,
  verify,
  resendOTP,
  login,
};
