const getEntradas = async () => {
    //const url = "http://localhost:8080/entradas";
    const url = "https://romangarcia-back-mysql.herokuapp.com/entradas";
    const res = await fetch(url);
    const entradas = await res.json();

    return entradas;
}

export default getEntradas;