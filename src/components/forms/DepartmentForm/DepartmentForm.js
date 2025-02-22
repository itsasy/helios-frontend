import React, { useEffect } from "react";
import { Modal, Form, Button } from "antd";
import useDepartmentForm from "./hooks/useDepartmentForm";
import DepartmentFields from "./components/DepartmentFields";
import "./DepartmentForm.css";

const DepartmentForm = ({ visible, onClose, onSuccess, department, departments }) => {
    const [form] = Form.useForm();
    const { loading, handleSubmit } = useDepartmentForm(department, onSuccess, onClose);

    useEffect(() => {
        if (department) {
            form.setFieldsValue(department);
        } else {
            form.resetFields();
        }
    }, [department, form]);

    return (
        <Modal
            title={department ? "Editar Departamento" : "Agregar Departamento"}
            visible={visible}
            onCancel={onClose}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={() => form.submit()}>
                    Guardar
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <DepartmentFields departments={departments} /> {/* Pasa los departamentos aquí */}
            </Form>
        </Modal>
    );
};

export default DepartmentForm;