document.getElementById("btnRegistrarse").addEventListener("click", register);
document.getElementById("btnInicioSesion").addEventListener("click", login);

var loginRegisterContainer = document.querySelector(".loginRegisterContainer");
var loginForm = document.querySelector(".loginForm");
var registerForm = document.querySelector(".registerForm");

var backGroundBoxLogin = document.querySelector(".backGroundBoxLogin");
var backGroundBoxRegister = document.querySelector(".backGroundBoxRegister");

const nombre = document.getElementById('nombre');
const correoRegis = document.getElementById('correo');
const usuario = document.getElementById('usuario');
const contraRegis = document.getElementById('contra');

registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    let usuarios = Array(
        {
            nombre: nombre.value,
            correoRegis: correo.value,
            usuario: usuario.value,
            contraRegis: contra.value
        }
    );
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    location.href='index.html'
    console.log(usuarios);
});

function login(){
    registerForm.style.display = "none";
    loginRegisterContainer.style.left = "1px";
    loginForm.style.display = "block";
    backGroundBoxRegister.style.opacity = "1";
    backGroundBoxLogin.style.opacity = "0";
}

function register(){
    registerForm.style.display = "block";
    loginRegisterContainer.style.left = "410px";
    loginForm.style.display = "none";
    backGroundBoxRegister.style.opacity = "0";
    backGroundBoxLogin.style.opacity = "1";
}