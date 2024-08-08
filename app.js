const textArea = document.querySelector('textArea');
const mensagem = document.querySelector('.mensagem');




let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];

function btEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] ,['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase ();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btDescriptar() {
    const textoDescriptado = Descriptar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = '';
}

function Descriptar (stringDescriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDescriptada = stringDescriptada.toLowerCase ();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptada;
}

const botaoCopiar = document.querySelector('.bt-copiar');

botaoCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(mensagem.value)
    .then(() => {
      // Exibir uma mensagem de sucesso, se necessário
      console.log('Texto copiado!');
    })
    .catch(err => {
      // Exibir uma mensagem de erro, se necessário
      console.error('Erro ao copiar texto:', err);
    });
});