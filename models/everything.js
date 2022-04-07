const User = require('./User');
const Story = require('./Story');
const Unapproved = require('./Unapproved');

exports.createUser = async (userObj) => {
    try {
        let username= userObj.username;
        let email = userObj.email;
        let password= userObj.password;
        let user = new User({
            username,
            email,
            password
        });
        return user
    } catch (err) {
        throw err;
    }
}

exports.getUser = async (email) => {
    try {
        let user = await User.findOne({ email });
        return user;
    } catch (err) {
        throw err;
    }

}

exports.createStory = async (storyObj) => {
    try {
        
        let user = storyObj.user;
        let title = storyObj.title;
        let paragraphs = storyObj.paragraphs;
        let members = storyObj.members;

        console.log(paragraphs);
        let story = new Story({
            user,
            title,
            paragraphs,
            members
        });
        await story.save();
        console.log("A story");
        console.log(story);
        return story;
    } catch (err) {
        throw err;
    }
}

exports.getStory = async (id) => {
    try {
        let story = await Story.findOne({id});
        // let story = await Story.find();
        console.log(story);
        return story;
    } catch (err) {
        throw err;
    }
}