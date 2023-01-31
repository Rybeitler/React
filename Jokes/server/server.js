const express =require('express')
const app = express()

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const MyRoutes = require('./routes/jokes.routes')
MyRoutes(app);

app.listen(8000, ()=> console.log('server is now running on port 8000'))