// components.js
// Este arquivo pode conter componentes reutilizáveis ou funções para criar elementos HTML dinamicamente
// Por exemplo, uma função para criar um card de resumo de dados
function createSummaryCard(title, value) {
    const card = document.createElement('div');
    card.classList.add('summary-card');
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${value}</p>
    `;
    return card;
}