const express = require('express');
const v1TenisRouter = require('./v1/routes/tenisRouter');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use("/api/v1/tenis", v1TenisRouter);

app.listen(port, () => {
    console.log(`API esta escuchando en el puerto ${port}`);
});