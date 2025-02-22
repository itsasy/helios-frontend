import React from "react";
import { Button, Input, Select, Row, Col } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

const { Group: ButtonGroup } = Button;
const { Option } = Select;

const ViewOptions = ({ activeView, searchText, onSearchChange, searchColumnMenu, selectedColumns, onColumnChange }) => {
    return (
        <Row className="view-options" justify="space-between" align="middle">
            <Col>
                <ButtonGroup className="view-buttons">
                    <Button type="primary">Listado</Button>
                    <Button type="primary">Árbol</Button>
                </ButtonGroup>
            </Col>
            <Col>
                <div className="search-section">
                    <Select
                        mode="multiple"
                        placeholder="Columnas"
                        style={{ width: "100%", minWidth: 250, maxWidth: 300, marginRight: 8 }}
                        suffixIcon={<DownOutlined />}
                        value={selectedColumns}
                        onChange={onColumnChange}
                        maxTagCount={1}
                        maxTagPlaceholder={`+${selectedColumns.length - 1}`}
                        dropdownRender={(menu) => (
                            <div>
                                {menu}
                            </div>
                        )}
                    >
                        {searchColumnMenu.props.children.map((menuItem) => (
                            <Option key={menuItem.key} value={menuItem.key}>
                                {menuItem.props.children}
                            </Option>
                        ))}
                    </Select>

                    {/* Input de búsqueda */}
                    <Input
                        placeholder="Buscar..."
                        prefix={<SearchOutlined />}
                        value={searchText}
                        onChange={onSearchChange}
                        className="search-input"
                    />
                </div>
            </Col>
        </Row>
    );
};

export default ViewOptions;