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

function registrar(usuario,correoRegis,contraRegis,nombre){
    if(localStorage.getItem(correoRegis)==null){
        localStorage.setItem(nombre,correoRegis);
        localStorage.setItem(correoRegis,usuario);
        localStorage.setItem(usuario,contraRegis);
        alert("¡Te has registrado en la página!")
    }
    else{
        alert("Usuario existente")
    }
}

function loginRegistro(usuario,contraRegis){
    if(localStorage.getItem(usuario)==contraRegis){
        alert("Se ha iniciado sesión")
    }
    else{
        alert("Contraseña o Usuario incorrecto")
    }
}

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