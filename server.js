const express = require("express")
const app = express()
const port = 3456
app.use(express.json())



const playerRoute = require("./route/playerRoute")

  

app.use(playerRoute)

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`)
})