const {db} = require('../config/connectToDb');

async function updateOneAmountPaid(payment){
    const {id_order, amount_paid} = payment;
    const query = 'UPDATE orders SET amount_paid = $2 WHERE id_order = $1';
    const values = [id_order, amount_paid];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Payment updated successfully'
        }
    }else{
        return {
            message: 'Failed to update payment'
        }
    }
}

async function updateOnePaymentStatus(payment){
    const {id_order, status} = payment;
    const query = 'UPDATE orders SET status = $2 WHERE id_order = $1';
    const values = [id_order, status];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Payment status updated successfully'
        }
    }else{
        return {
            message: 'Failed to update payment status'
        }
    }
}

module.exports = { updateOneAmountPaid , updateOnePaymentStatus};