import jwt from "jsonwebtoken"
import UnAuthenticatedError from "../errors/unauthenticated.js"

const authenticationMiddlewware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new UnAuthenticatedError("No or bad token provided")
    }
    const token = authHeader.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRETE)
        const { id, username } = decoded
        req.user = { id, username }
        next()
    } catch (error) {
        throw new UnAuthenticatedError("You are not authorized to access this route")
    }
}

export default authenticationMiddlewware