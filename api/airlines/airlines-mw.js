const checkAADest = (req,res,next)=>{
    const {dest} = req.params
    const destUp = dest.toUpperCase()
    if(destUp != "LAX" && destUp != "SFO" && destUp != "CLE"){
        res.status(404).send("<span style='white-space: pre-line;font-family:arial'>\nThe only destinations American Airlines serves are: SFO, LAX, and CLE\n\nPlease try again in this format: https://muleportnode.herokuapp.com/aa/lax (or SFO or CLE) 🙂\n</span>")
    }else{
        next()
    }
}

const checkUnitedDest = (req,res,next)=>{
    const {dest} = req.params
    const destUp = dest.toUpperCase()
    if(destUp != "LAX" && destUp != "SFO" && destUp != "CLE" && destUp != "PDX" && destUp != "PDF"){
        res.status(404).send("<span style='white-space: pre-line;font-family:arial'>\nThe only destinations United serves are: SFO, LAX, CLE, PDX, and PDF\n\nPlease try again in this format: https://muleportnode.herokuapp.com/united/lax (or SFO, CLE, PDX, or PDF) 🙂\n</span>")
    }else{
        next()
    }
}

module.exports = {
    checkAADest,
    checkUnitedDest
}