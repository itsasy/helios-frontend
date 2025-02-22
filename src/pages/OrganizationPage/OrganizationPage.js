import React, { useState } from "react";
import { Layout, Menu } from "antd";
import useDepartments from "./hooks/useDepartments";
import useColumnVisibility from "./hooks/useColumnVisibility";
import OrganizationTableColumns from "../../components/config/organizationTableColumns";
import ManagementSection from "./components/ManagementSection";
import ViewOptions from "./components/ViewOptions";
import OrganizationTable from "../../components/tables/OrganizationTable/OrganizationTable";
import DepartmentForm from "../../components/forms/DepartmentForm/DepartmentForm";
import "./OrganizationPage.css";

const { Content } = Layout;

const OrganizationPage = () => {
    const { departments, loading, fetchDepartments } = useDepartments();
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [filters, setFilters] = useState({});
    const columns = OrganizationTableColumns(departments);
    const { visibleColumns } = useColumnVisibility(columns);

    // Función para filtrar los datos
    const filteredDepartments = departments.filter((department) => {
        if (searchText) {
            const searchTextLower = searchText.toLowerCase();

            if (selectedColumns.length === 0) {
                const matchesSearch = columns.some((col) => {
                    const value = department[col.dataIndex];
                    return value && String(value).toLowerCase().includes(searchTextLower);
                });
                if (!matchesSearch) return false;
            }
            else {
                const matchesSearch = selectedColumns.some((col) => {
                    const column = columns.find((c) => c.dataIndex === col);
                    const value = department[column.dataIndex];
                    return column && value && String(value).toLowerCase().includes(searchTextLower);
                });
                if (!matchesSearch) return false;
            }
        }

        // Filtrado por columnas (División y División Superior)
        for (const key in filters) {
            if (filters[key]) {
                if (!filters[key].includes(department[key])) {
                    return false;
                }
            }
        }

        return true;
    });

    const searchColumnMenu = (
        <Menu>
            {visibleColumns.map((col) => (
                <Menu.Item
                    key={col.dataIndex}
                    onClick={() => {
                        if (selectedColumns.includes(col.dataIndex)) {
                            setSelectedColumns(selectedColumns.filter((c) => c !== col.dataIndex));
                        } else {
                            setSelectedColumns([...selectedColumns, col.dataIndex]);
                        }
                    }}
                >
                    {selectedColumns.includes(col.dataIndex) ? `✔ ${col.title}` : col.title}
                </Menu.Item>
            ))}
        </Menu>
    );

    // Función para manejar el cambio de columnas seleccionadas
    const handleColumnChange = (selectedValues) => {
        setSelectedColumns(selectedValues);
    };

    return (
        <Layout className="organization-layout">
            <Content className="content">
                <ManagementSection onAddDepartment={() => setModalVisible(true)} />
                <ViewOptions
                    searchText={searchText}
                    onSearchChange={(e) => setSearchText(e.target.value)}
                    searchColumnMenu={searchColumnMenu}
                    selectedColumns={selectedColumns}
                    onColumnChange={handleColumnChange}
                />
                <OrganizationTable
                    departments={filteredDepartments}
                    columns={visibleColumns.filter((col) => !col.hidden)}
                    loading={loading}
                    onChange={(pagination, filters, sorter) => {
                        setFilters(filters);
                    }}
                />
                <DepartmentForm
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSuccess={fetchDepartments}
                    departments={departments}
                />
            </Content>
        </Layout>
    );
};

export default OrganizationPage;