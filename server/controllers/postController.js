const data = require('../data/data');
const { getPostsQuery } = require('../models/postModel');

exports.getPost = (req, res) => {
  res.json({
    mensaje: "controlador getpost"
  });
};

exports.getAllPosts = async (req, res) => {
  const posts = await getPostsQuery();

  res.json(posts);
};

exports.createPost = (req, res) => {
  const { title, content, course, teacher, userId } = req.body;
  const newPost = {
    id: data.posts.length + 1,
    title,
    content,
    course,
    teacher,
    userId,
  };
  data.posts.push(newPost);
  res.json(newPost);
  console.log(data.posts);
};

exports.filtrarPosts = (req, res) => {
  if (req.params.curso) {
    const { curso } = req.params;
    const posts = data.posts.filter((post) => post.course.name === curso);
    res.json(posts);
  }

  if (req.params.catedratico) {
    const { catedratico } = req.params;
    const posts = data.posts.filter(
      (post) => post.teacher.name === catedratico,
    );
    res.json(posts);
  }
};
