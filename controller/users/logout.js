module.exports = {
  post: (req, res) => {
    console.log(req.body.token);
    if (req.body.token) {
      return res.status(200).json({
        token: null,
        status: 'Session destroyed safely',
      });
    } else {
      return res.status(400).json({
        status: 'Invalid request',
      });
    }
  },
};
