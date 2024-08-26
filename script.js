const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptado) {
    const matizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matizCodigo.length; i++){
        if(stringEncriptado.includes(matizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matizCodigo[i][0], matizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado) {
    const matizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matizCodigo.length; i++){
        if(stringDesencriptado.includes(matizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matizCodigo[i][1], matizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

document.querySelector(".btn-copiar").addEventListener("click", function() {
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        mensaje.value = "";
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
    });
});