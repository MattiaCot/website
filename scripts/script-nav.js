/**
<script>
  function accessDocs() {
    const pwd = prompt("Inserisci la password per accedere ai Docs:");
    if (pwd === "Mattia") {
      sessionStorage.setItem("docs_access", "Mattia"); // Salva accesso
      window.location.href = "docs.html";
    } else if (pwd !== null) {
      alert("Password errata!");
    }
    return false;
  }
  </script> 
**/
function accessDocs() {
  const pwd = prompt("Inserisci la password per accedere ai Docs:");
  if (pwd === "Mattia") {
      sessionStorage.setItem("docs_access", "Mattia"); // Salva accesso
      window.location.href = "docs.html";
  } else if (pwd !== null) {
      alert("Password errata!");
    }
  return false;
}