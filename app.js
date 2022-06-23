const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const userRouter = require('./routers/user');
const app = express();

app.use(express.json());

app.use(userRouter);


module.exports = app;