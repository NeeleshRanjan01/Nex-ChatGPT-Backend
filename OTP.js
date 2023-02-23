const nodemailer = require('nodemailer');
const { randomInt } = require('crypto');

const OTP = (req, res) => {
    const email = req.body.email;
    const otp = randomInt(100000, 999999);
    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'kk123456@email.com',
            pass: 'kk123456'
        }
    });

    console.log(email)

    const mailOptions = {
        from: 'kk123456@email.com',
        to: `${email}`,
        subject: 'One Time Password (OTP)',
        text: `Welcome to Nex ChatGPT \n\n Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending OTP');
        } else {
            console.log(`OTP sent to ${email}`);
            res.status(200).send({ result: 'OTP sent successfully', value: otp });
        }
    });
};

module.exports.OTP = OTP;

