import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export const sendData = async(req, res) => {
  console.log("send");
  const data = req.body.data;
   JSON.stringify(data)
 

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Selected Data',
    html: `<h1>Table of Data</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Hobbies</th>
      </tr>
      ${data.map(d => `
          <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
          <td>${d[3]}</td>
          <td>${d[4]}</td>
          </tr>
        `).join('')}
      </table>`
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: 'Error sending email' });
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send({ message: 'Email sent successfully' });
    }
  });
};
