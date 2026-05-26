import express from 'express'
const app = express()

app.listen(3000,()=>{
    console.log("server running...");
    
})
app.get('/', (req, res) => res.send('Server is running and connected to Supabase!'));