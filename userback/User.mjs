import mongoose from "mongoose"


//Could add unique constraints if needed by doing unique: true, but not doing so yet. Easier to test without it.
export const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: Number,
    sex: {type: String, required: true},
    email: {type: String, required: true}, 
    phoneNumber: {type: String, required: true},
    adress: {type: String, required: true},
    role: String
});

export const Users = mongoose.model('Users', userSchema);

