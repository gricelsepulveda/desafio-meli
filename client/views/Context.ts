import { createContext } from 'react';
import { SearchResult } from '../components/Search/Search';

export type ContextType = {
    //General states
    viewport: 'mobile' | 'desktop',
    setViewport: (param: ContextType['viewport']) => void,
    activeView: string,
    setActiveView: (param: ContextType['activeView']) => void
    //Search related states
    search: string,
    setSearch: (param: ContextType['search']) => void,
    searchResult: any,
    setSearchResult: (param: ContextType['searchResult']) => void,
    selectedProduct: string,
    setSelectedProduct: (param: ContextType['selectedProduct']) => void
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
    searchResult: {},
    setSearchResult: () => null,
    selectedProduct: '',
    setSelectedProduct: () => null
})

context.displayName = "Context"

export default context
