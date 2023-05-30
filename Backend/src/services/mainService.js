const { db } = require('../config/connectToDb');

async function getAllUsers() {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);
    if (result.rows.length > 0) {
        return result.rows;
    }else{
        return {
            message: "No users found"
        }
    }
}

module.exports = { getAllUsers };