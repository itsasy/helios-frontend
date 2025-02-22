import React, { useState } from "react";
import { Table } from "antd";
import useTableConfig from "./hooks/useTableConfig";
import { generateColumns } from "./utils/Tableutils";
import FilterDropdownWithSearch from "./components/FilterDropdownWithSearch";

const OrganizationTable = ({ departments, columns, loading, onChange }) => {
    const { visibleColumns } = useTableConfig(columns);
    const [pageSize, setPageSize] = useState(10);

    const handlePageSizeChange = (current, newPageSize) => {
        setPageSize(newPageSize);
    };

    const tableColumns = generateColumns(
        visibleColumns.filter((col) => !col.hidden).map((col) => {
            if (col.filters) {
                return {
                    ...col,
                    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
                        <FilterDropdownWithSearch
                            filters={col.filters}
                            setSelectedKeys={setSelectedKeys}
                            selectedKeys={selectedKeys}
                            confirm={confirm}
                        />
                    ),
                    onFilter: (value, record) => record[col.dataIndex] === value,
                };
            }
            return col;
        })
    );

    return (
        <Table
            dataSource={departments}
            columns={tableColumns}
            loading={loading}
            pagination={{
                pageSize: pageSize,
                showSizeChanger: true,
                onShowSizeChange: handlePageSizeChange,
                pageSizeOptions: ["10", "20", "30", "50"],
                showTotal: (total, range) => `${range[0]}-${range[1]} de ${total} resultados`, // Mostrar el total de resultados
            }}
            rowKey="id"
            className="organization-table"
        />
    );
};

export default OrganizationTable;