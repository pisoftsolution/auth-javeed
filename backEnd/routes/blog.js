const express = require('express');
const router = express.Router();
const blog = require('../controllers/blog');
const middleware = require('../middleware/authorization')

router.post('/add' , middleware.verify, blog.addBlog);
router.put('/edit' , middleware.verify, blog.editBlog);
router.delete('/delete' , middleware.verify, blog.delete);



module.exports = router