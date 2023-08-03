var hora =  13
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log(`Bom dia`)
}else if(hora <= 18){
    console.log('Boa tarde') 
}else{
    console.log('boa noite')
}

//para pegar a hora do sistema exatemente:

var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} Horas`)
if (hora < 12){
    console.log('boa noite')
}else{
    console.log('bom dia')
}

