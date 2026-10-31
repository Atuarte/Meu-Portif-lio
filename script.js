function mudarAba(abaId) {
  // 1. Esconde todos os conteúdos de aba
  const conteudos = document.querySelectorAll('.aba-conteudo');
  conteudos.forEach(conteudo => {
    conteudo.classList.remove('active');
    conteudo.style.display = 'none';
  });

  // 2. Reseta o estado de todos os botões de aba no cabeçalho
  const botoes = document.querySelectorAll('.aba-btn');
  botoes.forEach(botao => {
    botao.classList.remove('active');
  });

  // 3. Mostra a aba clicada
  const abaAtiva = document.getElementById('aba-' + abaId);
  if (abaAtiva) {
    abaAtiva.classList.add('active');
    abaAtiva.style.display = 'block';
  }

  // 4. Ativa o botão correspondente no cabeçalho
  const botaoAtivo = document.getElementById('btn-' + abaId);
  if (botaoAtivo) {
    botaoAtivo.classList.add('active');
  }

  // 5. Rola suavemente até o conteúdo
  document.getElementById('aba-' + abaId).scrollIntoView({ behavior: 'smooth' });
}