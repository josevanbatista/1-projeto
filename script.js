function toggleMode() { 
    const html = document.documentElement
    html.classList.toggle("light")
//pegar a tag img
const img = document.querySelector('#profile img')
//substituir a imagem
if (html.classlist.comtains("light")){
//se tiver light mode, adicionar a imagnenm light
} else{ 
// se tiver sem light mode, msnter a imagem normal. 
    img.setAttribute("src", "./assets/avatar.png")
  }
}
