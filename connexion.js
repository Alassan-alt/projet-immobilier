document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Récupérer les comptes enregistrés dans localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Vérifier si un utilisateur correspond
    const matchedUser = storedUsers.find(
      user => user.username === username && user.password === password
    );
  
    if (matchedUser) {
      // Connexion réussie
      alert("Connexion réussie !");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 500);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  });
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username && password) {
      // Simule la connexion
      localStorage.setItem("loggedIn", "true");
  
      setTimeout(() => {
        window.location.href = "index.html";
      }, 500);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
  
  