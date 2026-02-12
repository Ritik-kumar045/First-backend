import mongoose ,{ Schema } from 'mongoose';

const subscriptionSchema = new Schema({
    subscriber:{
        type: SchemaTypes.Types.ObjectId,
        ref:"User"
    },
    channel:{
        type: SchemaTypes.Types.ObjectId,
        //'subscriber' is subscribing
        ref:"User"
    }
},{timestamps:true})


export const Subscription = mongoose.model('Subscription', subscriptionSchema);