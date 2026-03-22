document.addEventListener('DOMContentLoaded', () => {
    //  1. LÓGICA DO TEMA (CLARO/ESCURO)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Carregar preferência salva
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
    });

    //  2. VALIDAÇÃO DO FORMULÁRIO 
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples de preenchimento
            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            // Validação de formato de e-mail usando Expressão Regular (Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("O formato do e-mail parece inválido.");
                return;
            }

            // Simulação de envio com sucesso
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso (Simulação).`);
            
            // Limpa o formulário após o sucesso
            form.reset();
        });
    }
});