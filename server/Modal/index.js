import mongoose from 'mongoose';
import 'dotenv/config';


export default mongoose.connect(`mongodb+srv://${"prajwolneupane"}:${encodeURIComponent(process.env.DB_PASSWORD)}@cluster0.rhukaix.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(() => {
    console.log(`Database connected`);
}).catch((e) => {
    console.log(`${e}`);
})