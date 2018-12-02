import axios from "axios";

export default {
    saveFormData: (data) => axios.post("/form", data),
    findFormById: (id) => axios.get(`/form/${id}`),
    findAllForms: () => axios.get("/form"),
    getSampleList: () => axios.get("/form/list"),
    findFormBySampleId: (sampleId) => axios.get(`/form/sample/${sampleId}`)
}