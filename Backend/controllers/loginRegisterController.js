const { db } = require('../config/connectToDb');

const getAllUsers = async (req, res) => {
    const query = 'SELECT * FROM users';
    try {
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result.rows);
            }
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getAllUsers };