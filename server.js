const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middlewear that pareses request body as nested object
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

 // middlewear that serves files from "public" directory 
 app.use(express.static('public'));

 // middlewear for routes 
 app.use('/', htmlRoutes);
 app.use('/api', apiRoutes);

 app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
 })