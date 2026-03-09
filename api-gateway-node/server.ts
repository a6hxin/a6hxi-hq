import express from "express"
import axios from "axios"

const app = express()

app.use(express.json())

app.post("/analyze", async(req,res)=>{

const code=req.body.code

const response=await axios.post(
"http://localhost:5000/analyze",
{code:code}
)

res.json(response.data)

})

app.listen(3000,()=>{
console.log("Node API running on port 3000")
})