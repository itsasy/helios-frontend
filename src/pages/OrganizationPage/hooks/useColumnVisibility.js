import { useState } from "react";

const useColumnVisibility = (initialColumns) => {
    const [visibleColumns, setVisibleColumns] = useState(initialColumns);

    const toggleColumnVisibility = (key) => {
        setVisibleColumns((prevColumns) =>
            prevColumns.map((col) =>
                col.dataIndex === key ? { ...col, hidden: !col.hidden } : col
            )
        );
    };

    return { visibleColumns, toggleColumnVisibility };
};

export default useColumnVisibility;