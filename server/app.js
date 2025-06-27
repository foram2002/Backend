// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const app = express();

// // ✅ Middleware for JSON parsing
// app.use(express.json());

// // ✅ Enable CORS for frontend
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

// // ✅ MongoDB connection
// const db = require('./db');

// // ✅ Routes
// const userRouter = require('./route/UserRoute');
// app.use('/userapi', userRouter);

// // ✅ Server Start
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server is running on: http://localhost:${port}`);
// });


require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Enable CORS for frontend
app.use(cors({
    origin: 'http://localhost:5173'
}));

// MongoDB connection
const db = require('./db');

// Routes
const userRouter = require('./route/UserRoute');
app.use('/userapi', userRouter);

// Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
