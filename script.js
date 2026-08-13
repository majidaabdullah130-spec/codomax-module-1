document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector('[data-form="login"]');
  const registerForm = document.querySelector('[data-form="register"]');
  const blogForm = document.querySelector('[data-form="blog"]');
  const saveDraft = document.getElementById("saveDraft");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful! (Demo frontend)");
      window.location.href = "dashboard.html";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const password = registerForm.password.value;
      const confirm = registerForm.confirmPassword.value;
      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }
      alert("Account created successfully! (Demo frontend)");
      window.location.href = "login.html";
    });
  }

  if (blogForm) {
    blogForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your blog has been published! (Demo frontend)");
      window.location.href = "dashboard.html";
    });
  }

  if (saveDraft) {
    saveDraft.addEventListener("click", () => {
      alert("Draft saved! (Demo frontend)");
    });
  }
});
