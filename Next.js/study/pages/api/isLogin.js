export default (req, res) => {
    res.statusCode = 200;
    res.json({ name: req.cookies.a_name }); // api/login의 setHeader값
};