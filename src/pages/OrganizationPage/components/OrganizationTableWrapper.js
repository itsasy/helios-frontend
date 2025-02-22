import React from "react";
import OrganizationTable from "../../../components/tables/OrganizationTable/OrganizationTable";

const OrganizationTableWrapper = ({ departments, visibleColumns, loading }) => {
    return (
        <OrganizationTable
            departments={departments}
            columns={visibleColumns.filter((col) => !col.hidden)}
            loading={loading}
        />
    );
};

export default OrganizationTableWrapper;