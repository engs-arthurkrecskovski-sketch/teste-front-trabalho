const getClientes = () => {
    return JSON.parse(localStorage.getItem('oficina_clientes')) || [];
};

const getServicos = () => {
    return JSON.parse(localStorage.getItem('oficina_servicos')) || [];
};

const salvarDados = (chave, lista) => {
    localStorage.setItem(chave, JSON.stringify(lista));
};