"use strict";
const { connection, connectToDatabase } = require("./db");


const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query(`Select * FROM users`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const ins = async(event) => {
    const responseBody = {
        message: 'Data Inserted Successfully',
        status: 200,
    };

    let username = new URLSearchParams(event.body).get('username') || null;
    let hometown = new URLSearchParams(event.body).get('hometown') || null;

    if (!username) return { statusCode: 422, message: "username is required." };
    if (!hometown) return { statusCode: 422, message: "hometown is required." };

    connection.connect();

    connection.query("CREATE TABLE IF NOT EXISTS users (`id` INT(3) PRIMARY KEY AUTO_INCREMENT, `name` VARCHAR(20) NOT NULL, `hometown` VARCHAR(20), `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)", function (error, results, fields) {
        if (error) throw error;
    });
    connection.query(`INSERT INTO users (name, hometown) VALUES ('${username}', '${hometown}')`, function (error, results, fields) {
        if (error) throw error;
    });

    responseBody.data = await getUsers()

    connection.end();

    return responseBody;
};

const upd = async(event) => {
    const responseBody = {
        message: 'Data Updated Successfully',
        status: 200,
    };

    let id = new URLSearchParams(event.body).get('id') || null;
    let hometown = new URLSearchParams(event.body).get('hometown') || null;

    if (!id) return { statusCode: 422, message: "id is required." };
    if (!hometown) return { statusCode: 422, message: "hometown is required." };

    connection.connect();

    connection.query(`UPDATE users SET hometown = '${hometown}' WHERE id = ${id}`, function (error, results, fields) {
        if (error) throw error;
    });

    responseBody.data = await getUsers()

    connection.end();

    return responseBody;
}

const del = async(event) => {
    const responseBody = {
        message: 'Data Deleted Successfully',
        status: 200,
    };

    let id = new URLSearchParams(event.body).get('id') || null;

    if (!id) return { statusCode: 422, message: "id is required." };

    connection.connect();

    connection.query(`DELETE FROM users WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;
    });

    responseBody.data = await getUsers()

    connection.end();

    return responseBody;
}

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE id = ${id}`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const sel = async(event) => {

    let id = new URLSearchParams(event.body).get('id') || null;

    if (!id) return { statusCode: 422, message: "id is required." };

    connection.connect();

    const responseBody = {
        message: 'Data Selected Successfully',
        data: await getUser(id),
        status: 200,
    };

    connection.end();

    return responseBody;
}

const getTest = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const dbtest = async(event) => {

    connection.connect();

    const responseBody = {
        message: 'DB Connected Successfully',
        data: await getTest(),
        status: 200,
    };

    connection.end();

    return responseBody;
}


exports.ins = ins
exports.upd = upd
exports.del = del
exports.sel = sel
exports.dbtest = dbtest