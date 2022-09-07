"use strict";

const { ins, upd, del, sel, dbtest } = require("./user");

exports.ins = async (event) => {
    try {
        const data = await ins(event)
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

    } catch (error) {
        throw error
    }
};

exports.upd = async (event) => {
    try {
        const data = await upd(event)
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

    } catch (error) {
        throw error
    }
};

exports.del = async (event) => {
    try {
        const data = await del(event)
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

    } catch (error) {
        throw error
    }
};

exports.sel = async (event) => {
    try {
        const data = await sel(event)
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

    } catch (error) {
        throw error
    }
};

exports.dbtest = async (event) => {
    try {
        const data = await dbtest(event)
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

    } catch (error) {
        throw error
    }
};