import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const TodolistTable = ({ todos, gridRef }) => {

    const columns = [
        { field: "date", sortable: true, filter: true },
        { field: "description", sortable: true, filter: true },
        { field: "priority", sortable: true, filter: true, 
          cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' } }
    ];

    return (
       
        <div className="ag-theme-material"
            style={{ height: '700px', width: '700px', margin: 'auto' }}>
            <AgGridReact
                ref={gridRef}
                onGridReady={params => gridRef.current = params.api}
                rowSelection="single"
                columnDefs={columns}
                rowData={todos}>
            </AgGridReact>
            
        </div>
        
    );
}

export default TodolistTable;
