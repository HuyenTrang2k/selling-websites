const User = require('../models/User');

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const isNew = req.query.new;

            // Kiểm tra giá trị của query parameter 'new'
            if (isNew && isNew.toLowerCase() === 'true') {
                // Tính toán ngày khởi tạo cách đây 3 tháng
                const threeMonthsAgo = new Date();
                threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

                // Truy vấn người dùng mới theo điều kiện ngày khởi tạo
                const users = await User.find({ createdAt: { $gte: threeMonthsAgo } });
                return res.status(200).json(users);
            } else {
                // Trả về tất cả người dùng nếu không có query parameter 'new=true'
                const users = await User.find();
                return res.status(200).json(users);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getNewUser: async (req, res) => {
        try {
            const isNew = req.query.new;

            // Kiểm tra giá trị của query parameter 'new'
            if (isNew && isNew.toLowerCase() === 'true') {
                // Tính toán ngày khởi tạo cách đây 3 tháng
                const threeMonthsAgo = new Date();
                threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

                // Truy vấn người dùng mới theo điều kiện ngày khởi tạo
                const users = await User.find({ createdAt: { $gte: threeMonthsAgo } });

                return res.status(200).json(users);
            } else {
                // Trả về tất cả người dùng nếu không có query parameter 'new=true'
                const users = await User.find();
                return res.status(200).json(users);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    deleteUser: async (req, res) => {
        //delete user
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json(user.username + ' deleted');
        }
        catch (err) {
            return res.status(500).json(err);
        }
    },
    updateUser: async (req, res) => {
        //update user
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            return res.status(200).json(user);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    },
    getUser: async (req, res) => {
        //get user
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json(user);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = UserController;