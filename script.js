function atualizarContagem() {
    const hoje = new Date();
    
    // Jacob Palis 2026
    const jacob = new Date('2026-03-01');
    const diasJacob = Math.floor((jacob - hoje) / (1000 * 60 * 60 * 24));
    document.getElementById('jacob').textContent = diasJacob + ' dias';
    
    // OBMEP 2025
    const obmep = new Date('2025-02-01');
    const diasObmep = Math.floor((obmep - hoje) / (1000 * 60 * 60 * 24));
    document.getElementById('obmep').textContent = diasObmep + ' dias';
}

atualizarContagem();
setInterval(atualizarContagem, 60000); // Atualiza a cada minuto
