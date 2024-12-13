// Vérifier si l'utilisateur est connecté
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Veuillez vous connecter pour accéder à cette page.");
  window.location.href = "index.html"; // Page de connexion
}

// Déconnexion
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  alert("Vous avez été déconnecté.");
  window.location.href = "index.html";
});
