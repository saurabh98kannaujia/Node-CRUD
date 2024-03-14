const getData = async (req, res) => {
    try {
        const b = "a"
        b = "c";
        console.log(b)
        res.status(200).json({
            msg: "OKKKKKKKKKKKKKK"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
  
}

const patchData = async (req, res, next) => {
    console.log("11111111")
    res.status(200).json({
        msg: "Patch Data"
    })
    next()
}

module.exports = { getData, patchData}