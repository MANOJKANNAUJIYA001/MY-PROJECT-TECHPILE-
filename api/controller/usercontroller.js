
import { masterPlanModel, projectModel, subscriptionModel, userModel, bidsModel } from "../model/model.js"
export const UserProfileUpdate = async (req, res) => {
    try {
        const { _id, name, email, phone, location, bio, rate, skill, headline, password, npassword } = req.body;
        const isExist = await userModel.findOne({ _id, password, type: "user" })
        if (isExist) {
            const updateData = { name, email, phone, location, bio, rate, skill, headline }
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
export const UserStats = async (req, res) => {
    try {
        const { userId } = req.query;
        const user = await userModel.findOne({ _id: userId })
        const bids = await bidsModel.countDocuments({ userId })
        const raw = await bidsModel.find({ userId, status: "accept" });
        const earning = raw?.reduce((t, item) => {
            return t += parseInt(item?.amount)
        }, 0)
        const result = {
            credits: user?.credit,
            totalBids: bids,
            Earning: earning
        }
        res.json({
            code: 200,
            success: true,
            message: "Data found",
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

export const getUserBids = async (req, res) => {
    try {
        const { userId } = req.query;
        const raw = await bidsModel.find({ userId });//user ko apna filter
        const finalData = await Promise.all(
            raw?.map(async (item) => {
                const projectData = await projectModel.findOne({ _id: item?.projectId })
                return {
                    title: projectData?.title,
                    budget: projectData?.budget,
                    amount: item?.amount,
                    status: item?.status
                }
            })
        )
        res.json({
            code: 200,
            success: true,
            message: "Data fetched successfully",
            result: finalData,
            error: false
        })
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
export const createUserBids = async (req, res) => {
    try {
        const { userId, projectId, amount } = req.body;
        const isExist = await bidsModel.findOne({ userId, projectId });
        if (isExist) {
            res.json({
                code: 400,
                success: false,
                message: "You have already placed the bids.",
                result: "",
                error: true
            })
        } else {
            const user = await userModel.findOne({ _id: userId });
            if (user?.credit > 0) {
                const data = new bidsModel({ userId, projectId, amount });
                const result = await data.save();
                const remCredits = parseInt(user?.credit) - 1
                await userModel.updateOne({ _id: userId }, { $set: { credit: remCredits } })
                res.json({
                    code: 200,
                    success: true,
                    message: "Bids Placed successfully.",
                    result: result,
                    error: false
                })
            } else {
                res.json({
                    code: 400,
                    success: false,
                    message: "You have not suficient credits.Please purchase plan.",
                    result: "",
                    error: true
                })
            }
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
export const userPurchasePlan = async (req, res) => {
    try {
        const { planId, userId } = req.body;
        const plan = await masterPlanModel.findOne({ _id: planId });
        const user = await userModel.findOne({ _id: userId })
        const puranaCredit = user?.credit ? user?.credit : 0;
        const planCredit = plan?.credits;
        const finalCredit = parseInt(puranaCredit) + parseInt(planCredit)
        await userModel.updateOne({ _id: userId }, { $set: { credit: finalCredit } })
        const data = new subscriptionModel({ userId, planId });
        const result = await data.save();
        res.json({
            code: 200,
            success: true,
            message: "Plan purchased successfully",
            result: result,
            error: false
        })
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
export const userProjectList = async (req, res) => {
    try {
        const result = await projectModel.find().sort({ createdAt: -1 })
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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