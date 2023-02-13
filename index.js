const express = require("express");
const port = 3003;
const app = express();

app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");

const dataTemplate = { message: "Usando Pug JS en Express" };

app.get("/template", (req, res) => {
	res.render("template.pug", dataTemplate);
});

app.get("/urlparam", (req, res) => {
	res.send(req.query);
});

app.post("/urljson", (req, res) => {
	res.send(req.body);
});

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
