const express = require('express');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const ADMIN_USER = process.env.ADMIN_USER || "sister_admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "S1st3r!NsideP@pa_2025";

app.use(basicAuth({
    users: { [ADMIN_USER]: ADMIN_PASS },
    challenge: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/panel', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Spider Cheat Panel running...');
});