var db = require("../models/workout");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.find({}).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id" function({body, params}, res) {
        db.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true }
        ).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.create({}).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", function(req, res) {
        db.find({}).limit(5).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        });
    });
};