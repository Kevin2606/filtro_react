const uri = `${import.meta.env.VITE_URI_FETCH}`;

export const getAll = async(seccion) =>{
    let res = await (await fetch(`${uri}/producto/${seccion}`)).json();
    return res;
}

export const getAllCategoria = async() =>{
    let res = await (await fetch(`${uri}/categoria`)).json();
    return res;
}