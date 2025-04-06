document.addEventListener("DOMContentLoaded", () => {
    function showPage() {
        let hash = window.location.hash || "#home"; // Se não houver hash, mostra a home
        document.querySelectorAll(".page").forEach(page => {
            page.classList.remove("active"); // Remove "active" de todas as páginas
        });
        document.querySelector(hash)?.classList.add("active"); // Ativa a correta
    }

    window.addEventListener("hashchange", showPage);
    showPage(); // Chama a função na inicialização
});