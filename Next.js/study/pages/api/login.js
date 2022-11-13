export default (req, res) => {
    if (req.method === 'POST') {
        res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=3600;HttpOnly,Secure'); // 3600초
        res.statucCode = 200;
        res.json({ message: 'ok' });
    }
};