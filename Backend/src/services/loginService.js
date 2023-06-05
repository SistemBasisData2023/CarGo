const { db } = require('../config/connectToDb');
const bcrypt = require("bcrypt");

async function login (user, session){
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
            session.user = user;
            session.authorized = true; 
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

async function register (user, session){
    const {username, password, email, phone_no} = user;
    const pass = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (username, password, email, phone_no) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [username, pass, email, phone_no];
    const result = await db.query(query, values);
    if(result.rowCount === 1){
        session.user = result.rows[0];
        session.authorized = true;
        return {
            message: 'Register successful'
        }
    }else{
        return{
            message: 'Failed to register'
        } 
    }
}

async function authorize(session){
    if(session.authorized){
        return {
            message: 'User is authorized',
            user: session.user,
            authorized: session.authorized
        }
    }else{
        return {
            message: 'User is not authorized'
        }
    }
}

async function logout (session){
    session.destroy();
    return {
        message: 'Logout successful'
    }
}

module.exports = { login, register, authorize, logout };