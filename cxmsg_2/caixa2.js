import { Cxmsg } from "./cxmsg2"

// const config={
//     titulo:"teste",
//     texto:"Curso de Javascript",
//     cor:"#48f"
// }
// const cxmsg=new Cxmsg(config)

const btn_mostrarCxmsg=document.querySelector("#btn_mostrarCxmsg")
const btn_mostrarCxmsg2=document.querySelector("#btn_mostrarCxmsg2")
const btn_mostrarCxmsg3=document.querySelector("#btn_mostrarCxmsg3")

btn_mostrarCxmsg.addEventListener("click",()=>{
   Cxmsg.mostrar("teste 1","javascript")
})

btn_mostrarCxmsg2.addEventListener("click",()=>{
    Cxmsg.mostrar("teste 2","javascript")
 })
 btn_mostrarCxmsg3.addEventListener("click",()=>{
    Cxmsg.mostrar("teste 3","javascript")
 })
 
 
