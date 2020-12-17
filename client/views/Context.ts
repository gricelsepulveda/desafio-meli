import { createContext } from 'react';
import { SearchResult, ProductDetail } from '../types/types';

export type ContextType = {
    search: string,
    setSearch: (param: ContextType['search']) => void,
    searchResult: SearchResult,
    setSearchResult: (param: ContextType['searchResult']) => void,
    selectedProduct: string,
    setSelectedProduct: (param: ContextType['selectedProduct']) => void,
    productData: ProductDetail,
    setProductData: (param: ContextType['productData']) => void
}

const context = createContext<ContextType>({
    search: '',
    setSearch: () => null,
    searchResult: {
        author: {
            name: '',
            lastname: ''
        },
        categories: [],
        items: []
    },
    setSearchResult: () => null,
    selectedProduct: '',
    setSelectedProduct: () => null,
    productData: {
        id: '',
        title: '',
        picture: '',
        price: {
            currency: 'ARS',
            amount: 0,
            decimals: 0
        },
        condition: '',
        free_shipping: false,
        sold_quantity: 0,
        description: ''
    },
    setProductData: (param: ContextType['productData']) => null
})

context.displayName = "Context"

export default context
