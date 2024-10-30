document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var openModalBtn = document.getElementById("bookne");
    var closeModalBtn = document.getElementsByClassName("close")[0];
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");

    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    loginBtn.onclick = function() {
        window.location.href = "/registration/aut.html"; 
    }

    registerBtn.onclick = function() {
        window.location.href = "/registration/registr.html"; 
    }
});