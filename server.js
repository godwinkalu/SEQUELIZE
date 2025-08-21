const express = require("express")
const app = express()
const port = 3456
app.use(express.json())
 const playerStartRoute =require("./route/playerStartRoute")



const playerRoute = require("./route/playerRoute")

  

app.use(playerRoute)
app.use(playerStartRoute)

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`)
})