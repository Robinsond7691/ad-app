const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json({ extended: false }));

connectDB();

app.use('/api/users', require('./routers/users'));
app.use('/api/auth', require('./routers/auth'));
app.use('/api/ads', require('./routers/ads'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
