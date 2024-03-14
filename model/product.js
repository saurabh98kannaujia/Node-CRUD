const mongoos = require('mongoose');

const productSchema = new mongoos.Schema({
    'name':{
        type: String,
        requrired: true
    },
    'contact_number': {
        type: Number,
        requrired: [true, '']
    },
    'address': {
        type: String,
        required: false
    }
})
const Note = mongoos.model("Product",productSchema)
module.exports = Note