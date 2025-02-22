
export const generateColumns = (columns) => {
    return columns.map((col) => ({
        ...col,
        key: col.dataIndex || col.key,
    }));
};