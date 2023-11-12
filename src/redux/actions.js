export const addConstact = (contact)=>{
    return {
        type:"contacts/addConstact",
        payload: contact 
    }
}

export const deleteContact = (id)=>{
    return {
        type:"contacts/deleteConstact",
        payload: id
    }
}

export const changeFilter = (filter)=>{
    return {
        type:"filter/setFilter",
        payload: filter
    }
}