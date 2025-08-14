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
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;

        if (isMobile && isPortrait) {
            document.body.style.margin = "0";
            document.body.style.padding = "0";
            document.body.style.height = "100vh";
            document.body.style.background = "linear-gradient(45deg, #ff99cc, #ff66b2, #ffb3d9, #ffe6f0)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
            document.body.innerHTML = `
                <div style="
                  display:flex;
                  flex-direction:column;
                  align-items:center;
                  justify-content:center;
                  height:100vh;
                  background:linear-gradient(45deg, #ff99cc, #ff66b2, #ffb3d9, #ffe6f0);
                  color:white;
                  font-size:20px;
                  text-align:center;
                ">
                  <i class="fas fa-mobile-alt shake-icon" style="font-size:80px; margin-bottom:40px;"></i>
                  <p>Vui lòng xoay ngang màn hình!</p>
                </div>
            `;

            // Khi xoay ngang thì tự vào trang
            function goIfLandscape() {
              if (window.matchMedia("(orientation: landscape)").matches) {
                  window.location.href = "hpbd.html";
              }
            }
            goIfLandscape();
            // Lắng nghe sự kiện xoay ngang
            window.addEventListener("orientationchange", goIfLandscape);
            window.addEventListener("resize", goIfLandscape);
        } else {
            // Mật khẩu đúng → báo và chuyển trang
            messageBox.style.display = "block";
            messageBox.style.backgroundColor = "#4CAF50"; // xanh lá
            messageBox.style.color = "#fff";
            messageBox.innerText = "Mật khẩu đúng! Chuẩn bị đón bất ngờ nè!!";

            setTimeout(() => {
                window.location.href = "hpbd.html";
            }, 1500);
        }
    } else {
        // Mật khẩu sai
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
