import React, { useState } from "react";
import { Input, Menu, Dropdown, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FilterDropdownWithSearch = ({ filters, setSelectedKeys, selectedKeys, confirm }) => {
    const [searchText, setSearchText] = useState("");

    const filteredFilters = filters.filter((filter) =>
        filter.text.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleFilterSelect = (value) => {
        setSelectedKeys([value]); 
        confirm(); 
    };

    return (
        <div style={{ padding: "8px" }}>
            <Input
                placeholder="Buscar..."
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ marginBottom: "8px" }}
            />
            <Menu>
                {filteredFilters.length > 0 ? (
                    filteredFilters.map((filter) => (
                        <Menu.Item
                            key={filter.value}
                            onClick={() => handleFilterSelect(filter.value)}
                            style={{ fontWeight: selectedKeys.includes(filter.value) ? "bold" : "normal" }}
                        >
                            {filter.text}
                        </Menu.Item>
                    ))
                ) : (
                    <Menu.Item disabled>No hay resultados</Menu.Item>
                )}
            </Menu>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                <Button onClick={() => confirm()} type="primary" size="small" style={{ marginRight: "8px" }}>
                    Aplicar
                </Button>
                <Button onClick={() => setSelectedKeys([])} size="small">
                    Limpiar
                </Button>
            </div>
        </div>
    );
};

export default FilterDropdownWithSearch;
