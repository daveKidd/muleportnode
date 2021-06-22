const checkDest = (req,res,next)=>{
    const {dest} = req.params
    const destUp = dest.toUpperCase()
    if(destUp != "LAX" && destUp != "SFO" && destUp != "CLE"){
        res.status(404).send("<span style='white-space: pre-line'>\nThe only destinations American Airlines serves are: SFO, LAX, and CLE\n\nPlease try again in this format: https://muleportnode.herokuapp.com/aa/lax (or SFO or CLE) 🙂\n</span>")
    }else{
        next()
    }
}

module.exports = {
    checkDest
}