import * as React from 'react'

function createContext(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext)

  function Provider(props) {
    const { children, ...context } = props
    const value = React.useMemo(() => context, Object.values(context))
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  function useContext(consumerName) {
    const context = React.useContext(Context)
    if (context) return context
    if (defaultContext !== undefined) return defaultContext

    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)
  }

  Provider.displayName = rootComponentName + 'Provider'
  return [Provider, useContext]
}

export { createContext }
