import axios from "axios";

export default {
    saveFormData: (data) => axios.post("/form", data),
    findFormById: (sampleId) => axios.get(`/form/${sampleId}`),
    findAllForms: () => axios.get("/form"),
    getSampleList: () => axios.get("/form/list")
}