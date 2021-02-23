const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
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

workoutSchema.virtual("combinedDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;