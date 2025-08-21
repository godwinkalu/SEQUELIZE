const {playerstart}=require("../models")


exports.createstart = async (req,res)=>{
  try {
     const{Goals, Assist, Redcard,Yellowcard}=req.body

     const {playerId}=req.params

  const createPlayer  =  await playerstart.create
  ({Goals, Assist, Redcard,Yellowcard, playerId})

  res.status(200).json({
    message:"playerStart successfully Created",
    data:createPlayer
  })
    
  } catch (error) {
    res.status(500).json({
      message:"something went wrong",
      error:error.message
    })
  }
}

exports.update = async(req,res)=>{
  const{id}=req.params
  const{Goals,Assist,Redcard,Yellowcard} = req.body
  try {
    const findstart = await playerstart.findByPk(id)
    if(!findstart){
      return res.status(404).json({
        message: "start not found",
      })
    } 

    const updated = await findstart.update({Goals, Assist,Redcard,Yellowcard})
    return res.status(500).json({
      message: 'sucessful',
      data:updated
    })
  } catch (error) {
     res.status(500).json({
      message:"error  updating ",
      error:error.message
    })
  }
}