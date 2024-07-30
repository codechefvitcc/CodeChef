const fetch = require("node-fetch");

// Email sending packages and config. ********
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "codechef.vitcc@gmail.com",
    pass: "eguq lcud nyfp zdmm",
  },
});
// *****************************************

// ************* Docs to work with Google Sheet Integration ******************
// https://docs.sheet.best/#generating-your-rest-api
// ***************************************************************************

const contactUsGoogleSheetLink =
  "https://sheet.best/api/sheets/d62f5c63-d82b-4188-9e19-b8711709ef35";

const joinUsGoogleSheetLink =
  "https://sheet.best/api/sheets/4a530dd9-cd9b-45e7-b01c-1165bb1e747a";

// ***************** Contact us APIs Start Here ***********************************
// reading all the emails from the Contact Us Google Sheet
const readContactUsGoogleSheet = (req, res) => {
  // Parsed Format
  fetch(contactUsGoogleSheetLink)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Error reading data" });
    });
};

// adding new email in the contact us google sheet
const addContactUsEmailInGoogleSheet = (req, res) => {
  const { data } = req.body;
  //console.log("What we got from frontend:", req.body);

  fetch(contactUsGoogleSheetLink, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // The response comes here
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
      res.status(500).json({ error: "Error adding data" });
    });
};
// ***************** Contact us APIs Ends Here ***********************************

// ***************** Join us APIs Starts Here ************************************
const addJoinUsDataInGoogleSheet = (req, res) => {
  const { data } = req.body;
  //console.log("What we got from frontend:", req.body);

  fetch(joinUsGoogleSheetLink, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // The response comes here
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
      res.status(500).json({ error: "Error adding data" });
    });
};

const readJoinUsDataFromGoogleSheet = (req, res) => {
  // Parsed Format
  fetch(joinUsGoogleSheetLink)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Error reading data" });
    });
};

// API to send email to join our whatsapp group
const sendWhatsAppJoinEmail = async (req, res) => {
  const whatsAppGroupLinks = {
    management: "https://chat.whatsapp.com/KGPTyNobdEo0JLdTGFJUUD",
    design: "https://chat.whatsapp.com/EjAzaKldne438q2zmMMupx",
    competitive_programming: "https://chat.whatsapp.com/E2woNYDyh7jKBTstOFdwNJ",
    social_media_and_content: "https://chat.whatsapp.com/GsZjXZ85Z048Cow4gEmh1V",
    web_development: "https://chat.whatsapp.com/JoEeiaH559cIs2vtWjggud",
  };

  const { vit_email, department, name } = req.body;

  if (!vit_email) {
    return res.status(400).json({ error: "Please Provide Email" });
  }

  if (!whatsAppGroupLinks[department]) {
    return res
      .status(400)
      .json({ error: "Invalid department", givenDept: department });
  }

  try {
    const mailOptions = {
      from: "codechef.vitcc@gmail.com",
      to: vit_email,
      subject: "Join Our WhatsApp Group",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #e0fbfc;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    background-color: #3d5a80;
                    border-radius: 10px;
                    color: white;
                    padding: 10px 0;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .content p {
                    color: #555555;
                    text-align: left;
                    line-height: 1.4;
                }
                .join-btn {
                    display: inline-block;
                    margin: 20px 0;
                    padding: 10px 20px;
                    background-color: #28a745;
                    color: white;
                    text-decoration: none;
                    border-radius: 10px;
                    font-size: 16px;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    color: #777777;
                }
                .footer a {
                    color: #007bff;
                    text-decoration: none;
                }
                .social-media {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                }
                .social-icon {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                }
                .social-icon img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                }
                .social-icon:hover img {
                    transform: scale(1.1);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🌟 Join Our Vibrant Community!</h1>
                </div>
                <div class="content">
                    <h2>Welcome to CodeChef!</h2>
                    <p>Thank you ${name} for filling out our requirement form. At CodeChef, we're all about innovation, passion, and camaraderie. Whether you're a first-year explorer or a seasoned senior, our doors are open to everyone who's eager to dive into the world of Competitive Programming. We're excited to introduce you to our various departments and sub-departments, where you can find your niche and contribute to meaningful projects.</p>
                    <p>Click the button below to join our WhatsApp group and stay updated with our latest activities and announcements regarding requirement.</p>
                    <a href="${whatsAppGroupLinks[department]}" class="join-btn">Join WhatsApp Group</a>
                </div>
                <div class="footer">
                    <p>Follow us on social media:</p>
                    <div class="social-media">
                        <a href="https://www.linkedin.com/company/codechef-vit-chennai-chapter/" target="_blank" class="social-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn">
                        </a>
                        <a href="https://www.instagram.com/codechef.vitc/" target="_blank" class="social-icon">
                            <img src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720083181/instagram_mqplcc.png" alt="Instagram">
                        </a>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
        return res.status(400).json({ message: "email not sent" });
      } else {
        console.log("Email sent", info.response);
        return res.status(200).json({ message: "email sent Successfully" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
// exporting the functions
module.exports = {
  readContactUsGoogleSheet,
  addContactUsEmailInGoogleSheet,
  readJoinUsDataFromGoogleSheet,
  addJoinUsDataInGoogleSheet,
  sendWhatsAppJoinEmail,
};
