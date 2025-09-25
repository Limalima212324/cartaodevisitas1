// Obtém o botão e o corpo da página
const botaoTema = document.getElementById('trocar-tema');
const body = document.body;

// Adiciona um "ouvinte de evento" ao botão. Quando ele é clicado:
botaoTema.addEventListener('click', function() {
    
    // Alterna a classe 'tema-escuro' no corpo
    body.classList.toggle('tema-escuro');
    
    // Troca o texto do botão
    if (body.classList.contains('tema-escuro')) {
        botaoTema.textContent = 'Trocar para Claro';
    } else {
        botaoTema.textContent = 'Trocar para Escuro';
    }
});
