export function EmailUsuario(email) {
    if (email.length <= 0 || email === null || email === "") {
        return "digite um email valido";
    }else {
        return "email valido"; 
    }
}
export function SenhaUsuario(senha) {
    if (senha.length <= 5 || senha === null || senha === "") {
        return "digite uma senha valida acima de 5 digitos";
    } else {
        return "senha valida";
    }
}
