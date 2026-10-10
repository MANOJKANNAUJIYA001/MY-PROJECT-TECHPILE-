import { userModel, projectModel, masterPlanModel, bidsModel } from "../model/model.js"
export const AdminProfileUpdate = async (req, res) => {
    try {
        const { _id, name, email, phone, location, bio, password, npassword } = req.body;
        const isExist = await userModel.findOne({ _id, password, type: "admin" })
        if (isExist) {
            const updateData = { name, email, phone, location, bio }
            if (npassword) updateData.password = npassword
            const result = await userModel.updateOne({ _id }, { $set: updateData })
            res.json({
                code: 200,
                success: true,
                message: "Profile updated successfully",
                result: result,
                error: false
            })
        } else {
            res.json({
                code: 400,
                success: false,
                message: "Current password is incorrect",
                result: "",
                error: true
            })
        }
    } catch (err) {
        console.log(err)
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const adminBidingList = async (req, res) => {
    try {
        const raw = await bidsModel.find()
        const finalData = await Promise.all(
            raw?.map(async (item) => {
                const user = await userModel.findOne({ _id: item?.userId })
                const project = await projectModel.findOne({ _id: item?.projectId })
                return {
                    _id: item?._id,
                    amount: item?.amount,
                    status: item?.status,
                    user_name: user?.name,
                    user_email: user?.email,
                    user_profile: user?.profile,
                    userId: user?._id,
                    projectId: item?.projectId,
                    title: project?.title,
                }
            })
        )
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: finalData,
            error: false
        })
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
export const adminStats = async (req, res) => {
    try {
        const users = await userModel.countDocuments({ type: "user" });
        const clients = await userModel.countDocuments({ type: "client" });
        const projects = await projectModel.countDocuments();
        const result = { users, clients, projects }
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
    } catch (err) {
        console.log(err);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })

    }
}
export const getmasterplan = async (req, res) => {
    try {
        const result = await masterPlanModel.find()
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
    } catch (err) {
        console.log(err);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })

    }
}
export const createmasterplan = async (req, res) => {

    try {
        const { name, price, credits, tagline, features, popular } = req.body;
        const isExists = await masterPlanModel.findOne({ name, price })
        if (isExists) {
            res.json({
                code: 400,
                success: false,
                message: "Plan already exists",
                result: "",
                error: true
            })
        } else {
            const data = new masterPlanModel({ name, price, credits, tagline, features, popular })
            const result = await data.save();
            res.json({
                code: 200,
                success: true,
                message: "Plan created  successfully",
                result: result,
                error: false
            })
        }
    } catch (err) {
        console.log(err);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })

    }
}
export const adminUserList = async (req, res) => {
    try {
        const result = await userModel.find({ type: "user" });
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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

export const adminClientList = async (req, res) => {
    try {
        const result = await userModel.find({ type: "client" });
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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

export const adminProjectList = async (req, res) => {
    try {
        const result = await projectModel.find();
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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