document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Vérification des champs vides
  if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
      return; // Arrête l'exécution si champs vides
  }

  // Récupérer les comptes enregistrés dans localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Vérifier si un utilisateur correspond
  const matchedUser = storedUsers.find(
      user => user.username === username && user.password === password
  );

  if (matchedUser) {
      // Connexion réussie
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", username); // Stocke l'utilisateur connecté
      alert("Connexion réussie !");
      setTimeout(() => {
          window.location.href = "index.html";
      }, 500);
  } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
      // Réinitialiser le mot de passe pour sécurité
      document.getElementById("password").value = "";
  }
});