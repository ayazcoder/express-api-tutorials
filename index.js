const express = require('express')
const authRoutes = require('./routes/authRoutes')
const adminRoutes = require('./routes/adminRoutes')
const clientRoutes = require('./routes/clientRoutes')
const { defaultController } = require('./controller/default')
const connectDB = require('./config/config')
const app = express()

app.use(express.json())

connectDB()

// auth routes
app.use('/auth', authRoutes)

// admin routes
app.use('/admin', adminRoutes)

// client routes
app.use('/client', clientRoutes)


// Default route (404 handler)
app.use(defaultController)

// Start server
app.listen(8888, () => {
    console.log('✅ Server is running on port 8888')
})