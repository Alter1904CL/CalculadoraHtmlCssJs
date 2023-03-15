const pantalla =document.querySelector(".pantalla")
const botones =document.querySelectorAll(".btn")

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        botones.forEach(boton => boton.disabled=false)
        const botonApretado = boton.textContent
        if(boton.id==="c"){
            pantalla.textContent = "0"
        return
        }
        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1){
                pantalla.textContent="0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            return}
        }
        if (boton.id === "igual") {
            let objeto=eval(pantalla.textContent)
             objeto=objeto.toString()
             if(objeto.includes('.')){
                objeto=objeto.slice(0,8)
                pantalla.textContent=objeto
                return
             } 
           else{  console.log(objeto)
            pantalla.textContent=objeto
            return}
        }
        if(pantalla.textContent === "0"){
            pantalla.textContent = botonApretado

        }else{
            pantalla.textContent += botonApretado
        }
        if(pantalla.textContent ==="←"){
            pantalla.textContent="0"
        }
        if(pantalla.textContent.length >="9")
        {
         botones.forEach(boton => boton.disabled=true)
         document.getElementById("borrar").disabled=false
         document.getElementById("c").disabled=false
         document.getElementById("igual").disabled=false
         
            console.log("maximo")
            return
        }

        
    })
}

)