import mongoose from 'mongoose'


const Connection = async (username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-34m57xe-shard-00-00.7zsfrwl.mongodb.net:27017,ac-34m57xe-shard-00-01.7zsfrwl.mongodb.net:27017,ac-34m57xe-shard-00-02.7zsfrwl.mongodb.net:27017/?ssl=true&replicaSet=atlas-eg0mgq-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{

        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true,
        })
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);

    }
}
export default Connection