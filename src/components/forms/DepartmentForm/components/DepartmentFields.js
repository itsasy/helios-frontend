import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const DepartmentFields = ({ departments }) => {
    return (
        <>
            <Form.Item
                name="name"
                label="Nombre"
                rules={[{ required: true, message: "El nombre es obligatorio" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="parent_id" label="División Superior">
                <Select allowClear>
                    {departments.map((dep) => (
                        <Option key={dep.id} value={dep.id}>
                            {dep.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name="ambassador_name" label="Embajador">
                <Input />
            </Form.Item>
        </>
    );
};

export default DepartmentFields;