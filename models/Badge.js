const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BadgeSchema =  new Schema({
    name: String,
    town: String,
    gymLeader: String,
    color: String,
});

const Badge = mongoose.model('Badge', BadgeSchema);

module.exports = Badge;