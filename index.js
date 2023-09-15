const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();
 
mongoose.set('strictQuery', true);

const DB = process.env.DATABASE
    
mongoose.connect(DB, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
}).then( con=> {
    console.log('DB connection successfull');
}).catch(err=>{
    console.log(err);
})



const port =process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('server is waiting........')
})