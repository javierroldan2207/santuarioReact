const urlBase = "http://localhost:3000/creatures";

function handleResponse(response){
    if(!response.ok){
        throw new Error("Error al obtener las criaturas.");
    }
    return response.json();
}

const handleError = (error)=> {
    console.log("Error al cargar." , error);
    throw error;
}

export const getAllCreatures = ()=>{
    return fetch(urlBase)
    .then(handleResponse)
    .catch(handleError)
}

 