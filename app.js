const express = require('express');
const app = express();
const materiasRouter = require('./materias');

app.use(express.json());

app.use('/materias', materiasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
