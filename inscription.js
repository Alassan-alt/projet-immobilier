document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    if (!username || !password || !confirmPassword) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
  
    // Récupérer les anciens comptes (s'il y en a)
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Vérifier si l'utilisateur existe déjà
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert("Ce nom d'utilisateur est déjà pris.");
      return;
    }
  
    // Ajouter le nouveau compte
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Compte créé avec succès !");
    window.location.href = "connexion.html";
  });
  