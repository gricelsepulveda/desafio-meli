import { createContext } from 'react';

export type AppContextType = {
    viewport: 'mobile' | 'desktop',
    setViewport: (viewport: AppContextType['viewport']) => void
}

const context = createContext<AppContextType>({
    viewport: 'desktop',
    setViewport: () => null
})

context.displayName = "AppContext"

export default context
