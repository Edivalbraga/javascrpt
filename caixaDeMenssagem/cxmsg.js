class Cxmsg {
    titulo = null
    texto = null
    cor = null
    destino = null
    divmsg = null
    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar = () => {
        this.divmsg = document.createElement("div")
        const estilo_divmsg =
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "position: absolute;" +
            "top: 0px;" +
            "width: 100%;" +
            "height: 100vh;" +
            "background-color: rgb(0,0,0,0.4);"
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxsmg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-item: flex-start;" +
            "flex-direction: column;" +
            "width: 300px;"
        const areaCxsmg = document.createElement("div")
        areaCxsmg.setAttribute("style", estilo_areaCxsmg)
        this.divmsg.appendChild(areaCxsmg)

        const estilo_tituloCxsmg =
            "display: felx;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 5px;" +
            "border-radius: 5px 5px 0px 0px;"

        const tituloCxsmg = document.createElement("div")
        tituloCxsmg.setAttribute("style", estilo_tituloCxsmg)
        tituloCxsmg.innerHTML = this.titulo
        areaCxsmg.appendChild(tituloCxsmg)


        const estilo_corpoCxsmg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "background-color: #eee;" +
            "color:#000;" +
            "padding:30px 5px"

        const corpoCxsmg = document.createElement("div")
        corpoCxsmg.setAttribute("style", estilo_corpoCxsmg)
        corpoCxsmg.innerHTML = this.texto
        areaCxsmg.appendChild(corpoCxsmg)

        const estilo_rodaPeCxsmg =
            "display:flex;" +
            "justify-content: space-around;" +
            "align-intems:center;" +
            "width:100%;" +
            "background-color:#ccc;" +
            "color:#000;" +
            "padding:5px;" +
            "border-radius: 0px 0px 5px 5px;"

        const rodaPeCxsmg = document.createElement("div")
        rodaPeCxsmg.setAttribute("style", estilo_rodaPeCxsmg)
        areaCxsmg.appendChild(rodaPeCxsmg)

        const estilo_botaoCxsmg =
            "background-color:" + this.cor + ";" +
            "color:#fff;" +
            "padding:10px 50px;" +
            "border-radius:5px;" +
            "cursor:pointer;" +
            "text-tranform:uppercase;"

        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("style", estilo_botaoCxsmg)
        btn_ok.innerHTML = "OK"
        btn_ok.addEventListener("click", (evt) => {
            this.ocultar()

        })
        rodaPeCxsmg.appendChild(btn_ok)

    }
    ocultar = () => {
        this.divmsg.remove()

    }

}