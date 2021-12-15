
const sendError = (code, error, res) => {
    res.status(code).json({"Error": error})
}

module.exports = {
    sendError
}