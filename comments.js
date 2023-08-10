// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// Import data
const commentsData = require('../data/comments.json');

// Create a new comment
router.post('/comments', (req, res) => {
  const newComment = {
    id: commentsData.length + 1,
    comment: req.body.comment,