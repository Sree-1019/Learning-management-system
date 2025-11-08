
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForms");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");  
    window.location.href = "Project.html";
    });
  }
 if (window.location.pathname.includes("Project.html")) {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      document.querySelectorAll("nav a").forEach(link => {
        if (link.textContent !== "Login") {
          link.style.display = "inline-block";
        }
      });
    } else {
      document.querySelectorAll("nav a").forEach(link => {
        if (link.textContent !== "Login") {
          link.style.display = "none";
        }
      });
    }
  }
});
