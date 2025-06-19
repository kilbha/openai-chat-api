import express, {Request, Response} from "express";
import axios from "axios";
import dotenv from "dotenv";


dotenv.config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

interface AskRequest{
    question:string
}

interface AskResponse {
    answer?: string;
    error?: string;
}

app.post("/ask", async (req:Request<{},{}, AskRequest>, res:Response) : Promise<any> => {
    const {question} = req.body;

    if(!question){
        return res.status(400).json({error:"Question is required"});
    }

    try{
        const openaiResponse = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model:"gpt-3.5-turbo",
                messages:[{role:"user", content:question}],
                temperature:0.7
            },{
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type':"application/json"
                },
            }
        );

        const answer = openaiResponse.data.choices[0].message.content;
        return res.json({answer})
    }catch(error){
        console.error("Error from OpenAI:", error);
        return res.status(500).json({ error: "OpenAI API error." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})