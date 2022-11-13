export default (res, res) => {
    res.statusCode = 200;
    res.json({ name: req.query.id });
};
// 다이나믹 api 라우트