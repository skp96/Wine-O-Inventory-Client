import { rest } from 'msw'
import { getWinesUrl } from '../api/base_urls'

export const getWinesHandler = rest.get(getWinesUrl, (req, res, ctx) => {
        return res(ctx.json([{ id: 1, name: "test wine", description: "test wine", rating: 1, quantity: 1 }]))
})
    
export const errorHandler = rest.get(getWinesUrl, (req, res, ctx) => {
    return res(ctx.status(500))
})

