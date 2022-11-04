const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//srver config
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(5000, ()=> console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: "sarkar099@outlook.com",
        pass: "alqrutxuqjonbswm"
    },
})

contactEmail.verify((error)=>{
    if(error) {
        console.log(error);
    }
    else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req,res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "sarkar099@outlook.com",
        subject: "Contact form Submission--Portfolio",
        html: ` <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (e)=>{
        if(e) {
            res.json({code:500, message: e});
        }
        else {
            res.json({code: 200, status: "Message Sent"});
        }
    })
})


