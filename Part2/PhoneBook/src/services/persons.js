import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

//metodo GetAll

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//metodo create
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

//metodo update
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

//export
export default {
    getAll,
    create,
    update,
    deletePerson
}