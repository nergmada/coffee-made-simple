import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', express.static(path.join(__dirname, 'admin')));

app.use('/cms-content', express.static(path.join(__dirname, 'cms-fs')));

app.use('/content', null);


app.listen(8080);