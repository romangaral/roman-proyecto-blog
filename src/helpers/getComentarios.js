const getComentarios = async () => {
    const url = "http://localhost:8080/comentarios";
    const res = await fetch(url);
    const comentarios = await res.json();

    return comentarios;
}

export default getComentarios;