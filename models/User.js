const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, require: true, unique: true },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be at least 8 characters']
    },
    //permissions: consumer, company (admin or rep) -- radio buttons or check boxes
    //if first company account, automatically fill in admin, else default to rep
    //only see admin/rep checkboxes if company is selected
    permissions: { type: String, required: true },
    //only show field once company bubble has been clicked so customer never sees or fills this out
    company: { type: String, required: false }
});

module.exports = mongoose.model('User', userSchema);
