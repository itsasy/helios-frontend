import api from "../utils/api";

export const getDepartments = async () => {

    try {
        const response = await api.get("/departments");
        return response.data.data;
    } catch (error) {
        console.log('Error fetching departments: ', error);
        throw error;
    }
};


export const createDepartment = async (departmentData) => {
    try {
        const response = await api.post("/departments", departmentData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.errors) {
            throw error.response.data.errors;
        }
        throw error;
    }
};

export const updateDepartment = async (id, departmentData) => {
    try {
        const response = await api.put(`/departments/${id}`, departmentData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.errors) {
            throw error.response.data.errors;
        }
        throw error;
    }
};