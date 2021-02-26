function cambio2() {
    document.getElementById("login").className = "oculto";
    document.getElementById("sign in").className = "visible";
    document.getElementById("Cambiar a ingreso").className = "visible";
    document.getElementById("cambiar a registro").className = "oculto";
}

function verificacion(){
    var password = document.getElementById("contraseña").value;
    var password2 = document.getElementById("contraseña2").value;
    var Texto = document.getElementById("resultado");
    var Texto2 = document.getElementById("resultado2");

    if (password == password2){
        Texto.innerText = "Las contraseñas coinciden"
    }
    else{
        Texto2.innerText = "Las contraseñas no coinciden"
    }
}