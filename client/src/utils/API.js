import axios from "axios";

export default {
    saveFormData: (data) => axios.post("/form", data),
    findFormById: (sampleId) => axios.get(`/form/${sampleId}`),
    findAllForms: () => axios.get("/form")
    // saveNote: (projectId,content) => axios.post(`/note/${projectId}`, content)  
}