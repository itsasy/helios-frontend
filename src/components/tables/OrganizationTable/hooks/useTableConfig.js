import { useState } from "react";

const useTableConfig = (initialColumns, initialPageSize = 10) => {
    const [visibleColumns, setVisibleColumns] = useState(initialColumns);
    const [pageSize, setPageSize] = useState(initialPageSize);

    const toggleColumnVisibility = (key) => {
        setVisibleColumns((prevColumns) =>
            prevColumns.map((col) =>
                col.dataIndex === key ? { ...col, hidden: !col.hidden } : col
            )
        );
    };

    return { visibleColumns, pageSize, setPageSize, toggleColumnVisibility };
};

export default useTableConfig;