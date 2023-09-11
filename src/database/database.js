import mongoose from "mongoose";
import 'dotenv/config';

const mongoURI = "mongodb://localhost:27017/test";

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');
})
