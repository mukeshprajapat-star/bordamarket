const mongoose=require('mongoose');
require("dotenv").config();
const connectDatabase=()=>{
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false
})
.then((data)=>{
    console.log(`mongo is connected with server ${data.connection.host}`);
});
};
module.exports=connectDatabase;
