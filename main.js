function playAudio(idAudio) {
  const element = document.querySelector(idAudio);

  if (element && element.localName === 'audio') {
    element.play();
  }
  else {
    alert('Elemento não encontrado ou seletor inválido');
  }
};
const keysList = document.querySelectorAll('.tecla');

for (let i = 0; i < keysList.length; i++) {
  const key = keysList[i];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playAudio(idAudio);
  };

  key.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      key.classList.add('ativa');
    };
  };

  key.onkeyup = function () {
    key.classList.remove('ativa');
  };
};
