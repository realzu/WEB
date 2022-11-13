export default (req, res) => {
    res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;HttpOnly,Secure'); // 0초
    res.statucCode = 200;
    res.json({ message: 'ok' });
};