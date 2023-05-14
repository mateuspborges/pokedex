function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    body.classList.toggle('light');

    // armazena a escolha do usuário em um cookie
    const mode = body.classList.contains('dark') ? 'dark' : 'light';
    document.cookie = `mode=${mode}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// verifica se o usuário já escolheu um modo anteriormente e define-o
const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('mode='));
if (cookie) {
    const mode = cookie.split('=')[1];
    document.querySelector('body').classList.add(mode);
}





