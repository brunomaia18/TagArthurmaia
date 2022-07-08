function copiar(){
            
    var copiado = document.querySelector('.texto').value;
    navigator.clipboard.writeText(copiado);
    aparecerstick()

}
