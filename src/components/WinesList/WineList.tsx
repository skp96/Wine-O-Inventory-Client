import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Wine } from '../../interfaces/wine_interface'

export const WineList: React.FC<{
    winesList: Wine[]
}> = ({ winesList }) => {

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            headerAlign: "center",
            align: "center"
        },
        {
            field: "name",
            headerName: "Name",
            headerAlign: "center",
            align: "center",
            width: 300
            
        },
        {
            field: "description",
            headerName: "Description",
            headerAlign: "center",
            align: "center",
            width: 450
        },
        {
            field: "rating",
            headerName: "Rating",
            headerAlign: "center",
            align: "center"
        },
        {
            field: "quantity",
            headerName: "Quantity",
            headerAlign: "center",
            align: "center"
        }
    ]

    const rows = winesList

    return (
        <>  
            <h2 data-testid="show-inventory" className="title-inventory">Wine Inventory</h2>
            {winesList.length ? (
                <div className='data-grid-container'>
                    <DataGrid
                    rowHeight={100}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    />
                </div>
            ): (
                <h2>List is empty!</h2>
            )}
        </>
    )
}
