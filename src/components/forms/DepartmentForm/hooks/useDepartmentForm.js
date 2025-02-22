import { useState, useEffect } from "react";
import { createDepartment, updateDepartment } from "../../../../services/departmentService";
import { message } from "antd";

const useDepartmentForm = (department, onSuccess, onClose) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            if (department) {
                await updateDepartment(department.id, values);
                message.success("Departamento actualizado exitosamente");
            } else {
                await createDepartment(values);
                message.success("Departamento creado exitosamente");
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error("Error saving department:", error);
            message.error("Error al guardar el departamento");
        } finally {
            setLoading(false);
        }
    };

    return { loading, handleSubmit };
};

export default useDepartmentForm;