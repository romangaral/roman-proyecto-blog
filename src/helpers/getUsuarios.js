const getUsuarios = async () => {
    const url = "http://localhost:8080/usuarios";
    const res = await fetch(url);
    const usuarios = await res.json();

    return usuarios;
}

export default getUsuarios;