const User = require('../models/user');
const emailService = require('./emailService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signupUser = async (email, username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

  await user.save();

  const otp = await generateOTP();
  user.verificationOTP = otp;
  await user.save();


  const emailSubject = 'KareerNest Account Verification';
  const emailText = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Email Verification Code</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Our App. Use the following otp to complete your Sign Up procedures.</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />KareerNest Tech Team</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>KareerNest team at your service</p>
    </div>
  </div>
</div>`;
  await emailService.sendEmail(email, emailSubject, emailText);

  return otp;
};

const verifyUser = async (userId, enteredOTP) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  if (user.isVerified) {
    throw new Error('User is already verified');
  }

  if (user.verificationOTP !== enteredOTP) {
    throw new Error('Incorrect OTP');
  }

  user.isVerified = true;
  user.verificationOTP = null;
  await user.save();

  return user;
};

const resendOTP = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }


  const newOTP = await generateOTP();
  user.verificationOTP = newOTP;
  await user.save();


  const emailSubject = 'KareerNest OTP Resent';
  const emailText = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Email Verification Code</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Our App. Your new verification OTP is:</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${newOTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />KareerNest Tech Team</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>KareerNest team at your service</p>
    </div>
  </div>
</div>`;
  await emailService.sendEmail(user.email, emailSubject, emailText);

  return newOTP;
};

const generateOTP = async () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    const isPasswordValid = await user.comparePassword(password);
  
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
  
    return user;
  };
  
const generateAuthToken = (user) => {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  };


module.exports = {
  signupUser,
  verifyUser,
  resendOTP,
  loginUser,
  generateAuthToken,
};
