import mongoose from "mongoose";

const db='mongodb+srv://ijoysinha:tinder@cluster0.swtb7.mongodb.net/TINDER?retryWrites=true&w=majority'

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log('Connection Start')}).catch((error)=>{console.log(error.message)});