const addConstact = (contact)=>{
    return {
        type:"contacts/addConstact",
        payload: contact 
    }
}

const deleteContact = (id)=>{
    return {
        type:"contacts/deleteConstact",
        payload: id
    }
}

const setFilter = (filter)=>{
    return {
        type:"filter/setFilter",
        payload: filter
    }
}