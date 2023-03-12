import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "edgardavidgt@gmail.com", // we are going to use environment variables to set this 
        pass: "iyjpsftkdzmksooc",
    },
});

export const mailOptions = {
    from: "edgardavidgt@gmail.com",
    to: "dagathor92@gmail.com",
};