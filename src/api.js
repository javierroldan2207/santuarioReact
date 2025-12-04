const urlBase = "http://localhost:3000/creatures";

function handleResponse(response){
    if(!response.ok){
        throw new Error("Error en la petición.");
    }
    return response.json();
}

const handleError = (error)=> {
    console.log("Error en la operación:" , error);
    throw error;
}

export const getAllCreatures = () => {
    return fetch(urlBase)
        .then(handleResponse)
        .catch(handleError);
}


export const createCreature = (creature) => {
    return fetch(urlBase, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creature)
    })
    .then(handleResponse)
    .catch(handleError);
}

export const updateCreature = (id, creature) => {
    return fetch(`${urlBase}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creature)
    })
    .then(handleResponse)
    .catch(handleError);
}

// DELETE
export const deleteCreature = (id) => {
    return fetch(`${urlBase}/${id}`, {
        method: "DELETE"
    })
    .then(handleResponse)
    .catch(handleError);
}
