const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: () => new Date()
    },

    exercises: [{
        type: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        weight: {
            type: Number,
            trim: true,
        },

        sets: {
            type: Number,
            trim: true,
        },

        reps: {
            type: Number,
            trim: true,
        },

        duration: {
            type: Number,
            trim: true,
        },

        distance: {
            type: Number,
            trim: true,
        }
    }]
});

const Workout = mongoose.model("workout", workoutSchema)

module.exports = Workout;