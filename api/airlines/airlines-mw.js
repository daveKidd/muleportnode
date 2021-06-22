const checkDest = (req,res,next)=>{
    const {dest} = req.params
    const destUp = dest.toUpperCase()
    if(destUp != "LAX" && destUp != "SFO" && destUp != "CLE"){
        res.status(404).send("The only destinations American Airlines serves are: SFO, LAX, and CLE\n\n<br><br>Please try again in this format: https://muleportnode.herokuapp.com/aa/LAX or SFO or CLE 🙂")
    }else{
        next()
    }
}

module.exports = {
    checkDest
}