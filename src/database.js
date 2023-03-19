import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
    try{
        const db = await connect(MONGODB_URI);//localhost marca error mejor la ip: 127.0.0.1:27017
        console.log("Database connected to ", db.connection.name);
    }catch (error) {
        console.error(error);
    }    
  })();
