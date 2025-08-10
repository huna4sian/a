let password = "";
const correctPassword = "160802";
const passwordInput = document.getElementById("password");

function addNumber(number) {
  if (password.length < 6) {
    password += number;
    passwordInput.value = password;
    passwordInput.classList.add("active");
  }
}

function clearPassword() {
  password = "";
  passwordInput.value = password;
  passwordInput.classList.remove("active");
}

function checkPassword() {
    const messageBox = document.getElementById("messageBox");

    if (password === correctPassword) {
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "#4CAF50"; // xanh lá
        messageBox.style.color = "#fff";
        messageBox.innerText = "Mật khẩu đúng! Chuẩn bị đón bất ngờ nè!!";

        // Chuyển trang sau 1.5 giây
        setTimeout(() => {
            window.location.href = "hpbd.html";
        }, 1500);
    } else {
        passwordInput.classList.add("shake");
        setTimeout(() => {
            passwordInput.classList.remove("shake");
            messageBox.style.display = "block";
            messageBox.style.backgroundColor = "#f44336"; // đỏ
            messageBox.style.color = "#fff";
            messageBox.innerText = "Mật khẩu sai! Vui lòng thử lại.";
            clearPassword();
        }, 500);
    }
}


function createHeartEffects() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.backgroundColor = `hsl(${Math.random() * 20 + 330}, 80%, ${Math.random() * 20 + 60}%)`;
    document.body.appendChild(heart);
  }
}

window.addEventListener("load", () => {
  createHeartEffects();
});