import { mailOptions, transporter } from "../api/config/nodemailer";
import { Request, Response } from 'express';


const handler = async (req: Request, res: Response)  => {
  if(req.method === 'POST'){
    const data = req.body;
    try {
        await transporter.sendMail({
            from: mailOptions.from,
            to: data.email,
            subject: "Anfrage",
            text: `Neue Anfrage von ${data.email}`,
            html:`<h1>Neue Anfrage von  ${data.email}</h1><p>${data.email}</p><p>${data.name}</p><p>${data.firstname}</p><p>${data.moreInfo}</p>`,
        }); 
        return res.status(200).json({message:"Email sent successfully"})
    } catch (error: any) {
        console.log(error);
        res.status(400).json({message:error.message})
    }
  }
  res.status(400).json({message:"Bad request"})

}

export default handler;