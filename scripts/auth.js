async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Auth script caricato correttamente"); // Debug

    setTimeout(() => {
        const protectedLink = document.querySelector("a[href='docs.html']");
        const correctHash = "6cf615d5f91afbccaae3960bbacb36d71c65b65dcf2043c3e80c695cfdf1a1d3"; // Hash di "mypassword123"

        if (protectedLink) {
            console.log("Link 'Docs' trovato"); // Debug
            protectedLink.addEventListener("click", async function (event) {
                event.preventDefault(); // Blocca la navigazione predefinita
                console.log("Intercepted click"); // Debug

                let password = prompt("Inserisci la password per accedere ai documenti:");
                if (!password) return;

                const hashedInput = await hashPassword(password);

                if (hashedInput === correctHash) {
                    window.location.href = "docs.html";
                } else {
                    alert("Password errata! Accesso negato.");
                }
            });
        } else {
            console.log("Errore: il link 'Docs' non è stato trovato!"); // Debug
        }
    }, 500); // Ritardo per garantire il caricamento
});