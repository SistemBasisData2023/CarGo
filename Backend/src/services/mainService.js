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

async function deleteOneUser(user){
    const { username } = user;
    const query = `DELETE FROM users WHERE username = $1`;
    const values = [username];
    const result = await db.query(query, values);
    if(result.rowCount === 1){
        return {
            message: 'User deleted successfully'
        }
    }else{
        return {
            message: 'Failed to delete user'
        }
    }
}

module.exports = { getAllUsers, deleteOneUser };