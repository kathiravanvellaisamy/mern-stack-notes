import express from 'express'

const app = express ()

const PORT = 5001

app.get("/api/notes",(req,res)=>{
    res.json({ message:"you got 5 notes" })
})

app.listen(PORT,()=>{
    console.log(`Application is running on port ${PORT}`);
    
})