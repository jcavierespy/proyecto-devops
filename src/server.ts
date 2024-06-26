import express from "express";
import { dividir, multiplicar, restar, sumar } from "./calcular.js";

const app = express();
const AMBIENTE = process.env.AMBIENTE || "desconocido"
const API_KEY = fs.readFileSync('/var/run/secrets/API_KEY', 'utf8');
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: sumar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: restar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: dividir(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "mul") {
    return res.send({ resultado: multiplicar(operacion.num1, operacion.num2) });
  }
  return res.send({ resultado: "hola mundo" });
});

app.get("/AMBIENTE", (req, res) => {
  res.send( `El sitio está en el ambiente: ${AMBIENTE}` );
});

app.get("/api", (req, res) => {
  res.send( `El sitio está en el ambiente: ${API_KEY}` );
});


export default app;