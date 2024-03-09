const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require:true,
    },
    companyLocation: {
        type: String,
        require: true,
    },
    duration: {
        type: String,
    },
    deadline: {
        type: String,
        require: true,
    },
    salary:{
        type: String,
    },
    description: {
        type: String,
        require: true,
    },
    culture: {
        type: String,
    },
    responsibilities: {
        type: String,
    },
    batch: {
        type: String,
        require: true,
    },
    qualification: {
        type: string
    },
    eligibilitycriteria: {
        type: string,
    },
    mustHave: {
        type: String,
    },
    goodToHave:{
        type: String,
    },
    otherInfo: {
        type: String,
    },

});

const Internship = mongoose.model('Internship', internshipSchema);

module.exports= Internship;