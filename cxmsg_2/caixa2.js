import { Cxmsg } from "./cxmsg2.js"

const config = {
   cor: "#48f",
   tipo: "ok",//tipos: ok,sim
   textos: ["SIM", "NÃO"],
   comando_sim: () => { }

}

const f_sim = () => {
   console.log("botão SIM pressionado")
   //   aqui programamos oq cada botão vai fazer
}

const btn_mostrarCxmsg = document.querySelector("#btn_mostrarCxmsg")
const btn_mostrarCxmsg2 = document.querySelector("#btn_mostrarCxmsg2")
const btn_mostrarCxmsg3 = document.querySelector("#btn_mostrarCxmsg3")

config.tipo = "ok"

btn_mostrarCxmsg.addEventListener("click", () => {
   config.tipo = "ok"
   Cxmsg.mostrar(config, "teste 1", "javascript")
})


btn_mostrarCxmsg2.addEventListener("click", () => {
   config.tipo = "sim"
   config.comando_sim = () => { f_sim() }
   Cxmsg.mostrar(config, "teste 2", "javascript 2")
})
btn_mostrarCxmsg3.addEventListener("click", () => {
   config.tipo = "sim"
   config.textos = ["OK", "CANCELA"]
   config.comando_sim = () => { }
   Cxmsg.mostrar(config, "teste 3", "javascript 3")
})


