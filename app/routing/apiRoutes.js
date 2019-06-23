const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        res.send(friends);
    });

    app.post("/api/friends", (req, res) => {
        const friendData = req.body;
        let bestFriend = {
            name: "",
            score: 10 * 5
        };
        // calculate best friend
        console.log("Calculating best friend");

        if (friends.length === 0) {
            console.log("Storing data");
            friends.push(friendData);
            return res.json({ result: "saved", message: "You're the first data entry, no other friends exist in database" })
        }
        if (friends.filter(friend => friend.name === friendData.name).length > 0)
            return res.json({ result: "failed", message: "Name already exist" })

        friends.forEach(friend => {
            let score = 0;
            for (let i = 0; i < friend.answers.length; i++) {
                score += Math.abs(friendData.answers[i] - friend.answers[i]);
            }
            if (bestFriend.score > score) {
                bestFriend.name = friend.name;
                bestFriend.score = score;
            }
        });


        // respond echoed data, and best friend name
        console.log("Storing data");
        console.log(friendData);
        friends.push(friendData);
        res.json({ bestFriend: bestFriend.name, data: friendData, result: "success", message: "Your best friend is " + bestFriend.name });
    });
}