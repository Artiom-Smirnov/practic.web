document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    setTimeout(() => {
      menu.classList.add('show');
    }, 500); // Задержка появления меню
  });



  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  const btnCart = document.querySelector('.btn-cart');
  btnCart.addEventListener('click', () => {
    const added = btnCart.querySelector('.added');
    added.style.opacity = 1;
    added.style.transform = 'scale(1)';
    setTimeout(() => {
      added.style.opacity = 0;
      added.style.transform = 'scale(0)';
    }, 1000); // Анимация длится 1 секунду
  });




  document.addEventListener("DOMContentLoaded", function () {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");
    var loginLink = document.querySelector(".text-wrapper-6");
    var closeButtons = document.querySelectorAll(".close");
    var openRegisterModalLink = document.getElementById("openRegisterModal");
  
    loginLink.addEventListener("click", function () {
      loginModal.style.display = "block";
    });
  
    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
      });
    });
  
    window.addEventListener("click", function (event) {
      if (event.target == loginModal || event.target == registerModal) {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
      }
    });
  
    openRegisterModalLink.addEventListener("click", function (event) {
      event.preventDefault();
      loginModal.style.display = "none";
      registerModal.style.display = "block";
    });
  
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      var username = document.getElementById("loginUsername").value;
      var password = document.getElementById("loginPassword").value;
  
      if (!/[A-Z]/.test(username)) {
        alert("Логин должен содержать хотя бы одну заглавную букву!");
        event.preventDefault();
        return;
      }
  
      if (password.length > 10) {
        alert("Пароль не должен превышать 10 символов!");
        event.preventDefault();
        return;
      }
  
      // Здесь можно добавить код для отправки данных на сервер для аутентификации
      loginModal.style.display = "none";
    });
  
    document.getElementById("registerForm").addEventListener("submit", function (event) {
      var username = document.getElementById("registerUsername").value;
      var password = document.getElementById("registerPassword").value;
  
      if (!/[A-Z]/.test(username)) {
        alert("Логин должен содержать хотя бы одну заглавную букву!");
        event.preventDefault();
        return;
      }
  
      if (password.length > 10) {
        alert("Пароль не должен превышать 10 символов!");
        event.preventDefault();
        return;
      }
  
      // Здесь можно добавить код для отправки данных на сервер для регистрации
      registerModal.style.display = "none";
    });
  });
  