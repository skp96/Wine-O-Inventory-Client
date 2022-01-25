import React from 'react'
import { Wine } from '../../interfaces/wine_interface'

export const WineItem: React.FC<{
    wineItem: Wine
}> = ({ wineItem }) => {

    return (
        <>
            <div>Name: {wineItem.name}</div>
            <div>Quantity: {wineItem.quantity}</div>
        </>
    )
}
