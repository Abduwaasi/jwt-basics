import BadRequest from "../errors/bad-request.js"
import jwt from "jsonwebtoken"
const login = async (req, res) => {
    // res.send("Fake login/ signup/register api")
    const { password, username } = req.body
    if (!username || !password) {
        throw new BadRequest("Please provide email or password")
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id: id, username }, process.env.JWT_SECRETE, { expiresIn: "30d" })
    res.status(200).json({ msg: "user created", token })
}

const dashboard = async (req, res) => {

    const { username } = req.user
    const luckyNumber = Math.floor((Math.random() * 100) + 1)
    res.status(200).json({ msg: `Hello ${username}`, secret: `Here is your dashboard, your secrete number is ${luckyNumber}` })


}

export { login, dashboard }