
(async () => {
    try {
        // URL do JSON externo
        const jsonUrl = "https://raw.githubusercontent.com/doro404/sk/refs/heads/main/axb.json";

        // Obtém o domínio atual (sem subdomínios e sem "www")
        const currentDomain = window.location.hostname.replace(/^www\./, "");

        // Faz a requisição para obter o JSON
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error("Erro ao carregar o JSON");

        const data = await response.json();

        // Verifica se o domínio atual está na lista de domínios permitidos
        if (!data.dominios.includes(currentDomain)) {
            console.log("Domínio não autorizado. Redirecionando...");
            window.location.href = data.destiny.x1; // Redireciona para o link x1
        } else {
            console.log("Domínio autorizado. Nenhum redirecionamento necessário.");
        }
    } catch (error) {
        console.error("Erro ao processar o JSON:", error);
    }
})();
