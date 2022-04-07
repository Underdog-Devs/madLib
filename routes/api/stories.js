const express = require('express');
const router = express.Router();

var StoryController = require('../../controllers/story.controller');

router.get("/", StoryController.getStory);

router.post("/", StoryController.createStory);

module.exports = router;