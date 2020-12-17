export type Price = {
    currency: string,
    amount: number,
    decimals: number
}

export type ProductType = {
    id: string,
    title: string,
    picture: string,
    price: Price,
    condition: string,
    free_shipping: boolean
}

export type SearchResult = {
    author: {
        name: string,
        lastname: string
    },
    categories: string[],
    items: ProductType[]
}

export interface ProductDetail extends ProductType {
    sold_quantity: number,
    description: string
}