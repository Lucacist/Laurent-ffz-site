// Chaîne cryptée contenant les identifiants et mot de passe
const encryptedCredentials = "cHJvZmVzc2V1cg==:MTIzNDU="; // Encodée en Base64

function decryptBase64(base64String) {
  return atob(base64String); // Décodage Base64 en texte brut
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Décrypter les identifiants et le mot de passe
  const [storedUsername, storedPassword] = encryptedCredentials
    .split(":")
    .map(decryptBase64);

  if (username === storedUsername && password === storedPassword) {
    // Connexion réussie : enregistrer l'état de connexion dans localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Redirection vers le tableau de bord
    alert("Connexion réussie !");
    window.location.href = "dashboard.html";
  } else {
    // Erreur de connexion
    errorMessage.textContent = "Identifiant ou mot de passe incorrect";
  }
}

// Associer la fonction au bouton de connexion
document.getElementById("login-btn").addEventListener("click", login);
