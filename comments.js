// create webserver
// create a route
// create a function that will be called when the route is hit
// return the comments
// export the route

const express = require('express');
const router = express.Router();
const comments = [
    { username: 'test', comment: 'test comment', date: getRandomDate() },
    { username: 'test2', comment: 'test comment 2', date: getRandomDate() },
    { username: 'test3', comment: 'test comment 3', date: getRandomDate() }
];

function getRandomDate() {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setUTCMonth(sixMonthsAgo.getUTCMonth() - 6);
    const now = new Date().getTime();
    const randomTime = Math.floor(Math.random() * (now - sixMonthsAgo.getTime())) + sixMonthsAgo.getTime();
    return new Date(randomTime);
}

router.get('/comments', (req, res) => {
    res.json(comments);
});

module.exports = router;