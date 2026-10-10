import { userModel } from '../model/model.js'
export const userRegister = async (req, res) => {
    try {
        const { type, name, email, password } = req.body;
        const isExist = await userModel.findOne({ email });
        if (isExist) {
            res.json({
                code: 400,
                success: false,
                message: "User already exists",
                result: isExist,
                error: true
            })
        } else {
            const data = new userModel({ type, name, email, password })
            const result = await data.save()
            res.json({
                code: 200,
                success: true,
                message: "User register successfully.",
                result: result,
                error: false
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isMatch = await userModel.findOne({ email, password });
        if (isMatch) {
            res.json({
                code: 200,
                success: true,
                message: "Login successful",
                result: isMatch,
                error: false
            })
        } else {
            res.json({
                code: 404,
                success: false,
                message: "Invalid Credentials login failed.",
                result: '',
                error: true
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}