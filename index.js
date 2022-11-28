const express = require("express");
const app = express();
const port = 3000;
const cursosRouter = require("./routes/cursos");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/",(req, res)=>{
    res.json({ message : "Okey"});
});
app.use("/cursos", cursosRouter);

app.listen(port, ()=>{
    console.log("El server está activo...");
});