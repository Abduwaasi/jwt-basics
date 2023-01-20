import CustomApiError from "../errors/custom-error.js"
import { StatusCodes } from "http-status-codes"
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
}

export default errorHandlerMiddleware