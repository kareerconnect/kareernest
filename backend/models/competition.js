const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    registrationDate: {
        type: String,
        require: true,
    },
    submissionDate: {
        type : String,
        require: true,
    },
    company:{
        type: String,
        require: true,
    },
    mode: {
        type: String,
    },
    batch: {
        type: String,
    },
    description: {
        type: String,

    },
    rules: {
        type: String,
        
    },
    eligibility: {
        type: String,
    },
    perksAndBenifits: {
        type: String,
    },
    otherInfo: {
        type: String,
    },

    link: {
        type: String,
        require: true,
    },
});
const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;