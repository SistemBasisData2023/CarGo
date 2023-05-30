const { db } = require('../config/connectToDb');
const bcrypt = require("bcrypt");

async function login (user){
    const {username, password} = user;
    const query = `SELECT * FROM users WHERE username = $1`;
    const values = [username];
    const result = await db.query(query, values);
    if(result.rows.length === 0){
        return {
            message: 'User not found'
        }
    }else{
        const user = result.rows[0];
        const pass = await bcrypt.compare(password, user.password);
        if(pass){
            return {
                message: 'Login successful',
                user
            }
        }else{
            return {
                message: 'Password is not correct'
            }
        }
    }
}

async function register (user){
    const {username, password, email, phone_no} = user;
    const pass = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (username, password, email, phone_no) VALUES ($1, $2, $3, $4)`;
    const values = [username, pass, email, phone_no];
    const result = await db.query(query, values);
    if(result.rowCount === 1){
        return {
            message: 'Register successful'
        }
    }else{
        return{
            message: 'Failed to register'
        } 
    }
}

module.exports = { login, register };