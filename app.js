const express = require('express');
const routes = require('./routes');
app = new express();

//middlewears
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/api', routes);

app.listen(8080, () => {
    console.log("SERVER IS LISTEN ON PORT 8080")
});