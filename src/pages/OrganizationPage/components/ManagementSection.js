import React from "react";
import { Tabs, Button, Col, Row } from "antd";
import { PlusOutlined, UploadOutlined, DownloadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const ManagementSection = ({ onAddDepartment }) => {
    return (
        <Row className="management-section" justify="space-between" align="middle">
            <Col>
                <Tabs defaultActiveKey="divisiones" className="custom-tabs">
                    <TabPane tab="Divisiones" key="divisiones" />
                    <TabPane tab="Colaboradores" key="colaboradores" />
                </Tabs>
            </Col>
            <Col>
                <div className="right-options">
                    <Button
                        icon={<PlusOutlined />}
                        type="primary"
                        className="custom-button"
                        onClick={onAddDepartment}
                    />
                    <Button
                        icon={<UploadOutlined />}
                        type="text"
                        className="custom-button"
                    />
                    <Button
                        icon={<DownloadOutlined />}
                        type="text"
                        className="custom-button"
                    />
                </div>
            </Col>
        </Row>
    );
};

export default ManagementSection;