import { createContext } from 'react';
import { SearchResult } from '../components/Search/Search';
import { ProductDetail } from './product/ProductView'

export type ContextType = {
    //General states
    viewport: 'mobile' | 'desktop',
    setViewport: (param: ContextType['viewport']) => void,
    activeView: string,
    setActiveView: (param: ContextType['activeView']) => void
    //Search related states
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
    //General states
    viewport: 'desktop',
    setViewport: () => null,
    activeView: '',
    setActiveView: () => null,
    //Search related states
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
