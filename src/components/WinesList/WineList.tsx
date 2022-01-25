import React from 'react'
import { Wine } from '../../interfaces/wine_interface'
import { WineItem } from './WineItem'

export const WineList: React.FC<{
    winesList: Wine[]
}> = ({ winesList }) => {

    const renderWinesList = () => {
        if (winesList.length) {
            const mappedwines = winesList.map((wine) => <li key={wine.id}>{<WineItem wineItem={wine} />}</li>)
            return <ul>{mappedwines}</ul>
        } else {
            return <h1>List is empty!</h1>
        }
    }

    return (
        <>
            <h2 role='show-inventory'>Wine Inventory</h2>
            <div>
                {renderWinesList()}
            </div>
        </>
    )
}
