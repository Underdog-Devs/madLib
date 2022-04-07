const Everything = require('../models/everything');

exports.createStory = async (req, res) => {
    try{
        let s = await Everything.createStory(req.body);
        res.send({
            'story':s
        });
    }catch(err) {
        console.error(err);
        res.send({'err':err});
    }
}

exports.getStory = async (req,res) => {
    try{
        let s = await Everything.getStory(req.body.sid);
        res.send({
            'story':s
        });
    }catch(err) {
        console.error(err);
        res.send({'err':err});
    }
}