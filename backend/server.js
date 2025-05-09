const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/tools', require('./routes/tools.routes'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
