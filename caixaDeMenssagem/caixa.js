const config={
    titulo:"teste",
    texto:"Curso de Javascript",
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)

const btn_mostrarCxmsg=document.querySelector("#btn_mostrarCxmsg")

btn_mostrarCxmsg.addEventListener("click",()=>{
   cxmsg.mostrar()
})
