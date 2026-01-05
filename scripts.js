function atualizarRelogio() {
  const agora = new Date();

  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
  const ano = agora.getFullYear();

  document.getElementById('hora').textContent =
    `${horas}:${minutos}:${segundos}`;

  document.getElementById('data').textContent =
    `${dia}/${mes}/${ano}`;
}

// atualiza imediatamente
atualizarRelogio();

// atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);
