const {Blog} = require('../models');

const blogdata = [
  {
    title: 'Why github is important',
    content: 'The primary benefit of GitHub is its version control system, which allows for seamless collaboration without compromising the integrity of the original project.',
    post_by: 'Benny221',
    post_date: 'June 21, 2021 17:00:00',
  },
  {
    title: 'What is jQuery?',
    content: 'Query is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax.',
    post_by: '',
    post_date: 'June 17, 2021 1:00:00',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
