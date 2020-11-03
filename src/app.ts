import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';

const app = express();
const port: string = process.env.PORT || '4000';
const server = http.createServer(app);

app.set('port', port);
server.listen(port);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get('/test', function (req, res) {
    res.json({
        value: 'hello world',
    });
});

app.use(function (req, res) {
    res.status(404).end();
});
