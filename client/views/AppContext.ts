import { createContext } from 'react';
import { SearchResult } from '../components/Search/Search';

export type AppContextType = {
    //General states
    viewport: 'mobile' | 'desktop',
    setViewport: (param: AppContextType['viewport']) => void,
    activeView: string,
    setActiveView: (param: AppContextType['activeView']) => void
    //Search related states
    search: string,
    setSearch: (param: AppContextType['search']) => void,
    searchResult: any,
    setSearchResult: (param: AppContextType['searchResult']) => void,
    selectedProduct: string,
    setSelectedProduct: (param: AppContextType['selectedProduct']) => void
}

const context = createContext<AppContextType>({
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

context.displayName = "AppContext"

export default context
