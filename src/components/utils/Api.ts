import axios from "axios";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// verify
export const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTHA_SECRET_KEY;

  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    token;

  return await axios.post(verificationUrl);
};

// send mail
export const sendMail = async (
  name: string,
  email: string,
  message: string
) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    host: "smtp.gmail.com",
    name: "Mailer",
    port: 587,
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: "edgardavidgt@gmail.com", // list of receivers
      subject: `${email} is contacted you from  website!!`, // Subject line
      text: "Reach out with you", // plain text body
      html: `
      <h3>Name:- ${name}</h3>
      <h3>Email:- ${email}</h3>
      <p>Message:- ${message}</p>
      `, // html body
    });
    console.log("Message sent: %s email", info.messageId);
  } catch (error) {
    console.log("Failed to send email", error);
  }
};

// save users data to spread sheeet
export const saveDataToSpreadSheet = async values => {
  const auth = new google.auth.GoogleAuth({
    // keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_id: process.env.GOOGLE_CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      type: "service_account",
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets: any = google.sheets({ version: "v4", auth: client });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1",
    valueInputOption: "RAW",
    resource: {
      values: [values],
    },
  });
};
