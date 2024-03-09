const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    perksAndBenifits: {
        type: String,
    },
    batchEligible:{
        type: String,
    },
    salary: {
        type: String,
    },
    qualificaionAndSkills: {
        type: String,
    },
    responsibilities: {
        type: String,
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
    link: {
        type: String,
        require: true,
    },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;