
const getUniqueValues = (data, key) => {
    if (!data || !Array.isArray(data)) {
        return [];
    }

    const uniqueValues = [...new Set(data.map((item) => item[key]).filter((value) => value != null))];

    return uniqueValues.map((value) => ({
        text: String(value),
        value: value,
    }));
};


const OrganizationTableColumns = (data) => [
    {
        title: "División",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
        filters: getUniqueValues(data, "name"),
        onFilter: (value, record) => record.name.includes(value),
    },
    {
        title: "División Superior",
        dataIndex: "parent_name",
        key: "parent_name",
        render: (parent_name) => parent_name || "-",
        sorter: (a, b) => (a.parent_name || "").localeCompare(b.parent_name || ""),
        filters: getUniqueValues(data, "parent_name"),
        onFilter: (value, record) => record.parent_name === value,
    },
    {
        title: "Colaboradores",
        dataIndex: "employees_count",
        key: "employees_count",
        sorter: (a, b) => a.employees_count - b.employees_count,
    },
    {
        title: "Nivel",
        dataIndex: "level",
        key: "level",
        sorter: (a, b) => a.level - b.level,
    },
    {
        title: "Subdivisiones",
        dataIndex: "subDepartments_count",
        key: "subDepartments_count",
        render: (subDepartments_count) => subDepartments_count || "-",
        sorter: (a, b) => a.subDepartments_count - b.subDepartments_count,
    },
    {
        title: "Embajadores",
        dataIndex: "ambassador_name",
        key: "ambassador_name",
        render: (ambassador_name) => ambassador_name || "-",
    },
];

export default OrganizationTableColumns;