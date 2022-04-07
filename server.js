const express = require("express")
const connectDB = require('./config/db')

const app = express()

connectDB()

app.get("/", (req, res) => res.send('API Running'))

// Init Middleware
app.use(express.json());

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/stories', require('./routes/api/stories'));
app.use('/api/unapproved', require('./routes/api/unapproved'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));