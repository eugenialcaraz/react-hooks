// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'

// import {
//   fetchPokemon,
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)

//   React.useEffect(() => {
//     if (!pokemonName) return
//     setPokemon(null)
//     fetchPokemon(pokemonName).then(pokemonData => setPokemon(pokemonData))
//   }, [pokemonName])

//   return !pokemonName ? (
//     'Submit a pokemon'
//   ) : !pokemon ? (
//     <PokemonInfoFallback name={pokemonName} />
//   ) : (
//     <PokemonDataView pokemon={pokemon} />
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

// export default App

//Extra credit 1

// import * as React from 'react'

// import {
//   fetchPokemon,
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)
//   const [error, setError] = React.useState(null)

//   React.useEffect(() => {
//     if (!pokemonName) return
//     setPokemon(null)
//     fetchPokemon(pokemonName).then(
//       pokemonData => setPokemon(pokemonData),
//       pokemonError => setError(pokemonError),
//     )
//   }, [pokemonName])

//   return error ? (
//     <div role="alert">
//       There was an error:
//       <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//     </div>
//   ) : !pokemonName ? (
//     'Submit a pokemon'
//   ) : !pokemon ? (
//     <PokemonInfoFallback name={pokemonName} />
//   ) : (
//     <PokemonDataView pokemon={pokemon} />
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

// export default App

//Extra credit 2

// import * as React from 'react'

// import {
//   fetchPokemon,
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)
//   const [error, setError] = React.useState(null)
//   const [promiseStatus, setPromiseStatus] = React.useState('idle')

//   React.useEffect(() => {
//     if (!pokemonName) return
//     setPokemon(null)
//     setPromiseStatus('pending')
//     fetchPokemon(pokemonName).then(
//       pokemonData => {
//         setPokemon(pokemonData)
//         setPromiseStatus('resolved')
//       },
//       pokemonError => {
//         setError(pokemonError)
//         setPromiseStatus('rejected')
//       },
//     )
//   }, [pokemonName])

//   return promiseStatus === 'rejected' ? (
//     <div role="alert">
//       There was an error:
//       <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//     </div>
//   ) : promiseStatus === 'idle' ? (
//     'Submit a pokemon'
//   ) : promiseStatus === 'pending' ? (
//     <PokemonInfoFallback name={pokemonName} />
//   ) : (
//     <PokemonDataView pokemon={pokemon} />
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

// export default App

//Extra credit 3
// import * as React from 'react'

// import {
//   fetchPokemon,
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [promiseStatus, setPromiseStatus] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) return
//     setPromiseStatus({status: 'pending', pokemon: null, error: null})
//     fetchPokemon(pokemonName).then(
//       pokemonData => {
//         setPromiseStatus({
//           status: 'resolved',
//           pokemon: pokemonData,
//           error: null,
//         })
//       },
//       pokemonError => {
//         setPromiseStatus({status: 'rejected', error: pokemonError})
//       },
//     )
//   }, [pokemonName])

//   return promiseStatus.status === 'rejected' ? (
//     <div role="alert">
//       There was an error:
//       <pre style={{whiteSpace: 'normal'}}>{promiseStatus.error}</pre>
//     </div>
//   ) : promiseStatus.status === 'idle' ? (
//     'Submit a pokemon'
//   ) : promiseStatus.status === 'pending' ? (
//     <PokemonInfoFallback name={pokemonName} />
//   ) : (
//     <PokemonDataView pokemon={promiseStatus.pokemon} />
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

// export default App

//Extra credit 6
// import * as React from 'react'
// import {ErrorBoundary} from 'react-error-boundary'

// import {
//   fetchPokemon,
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [promiseStatus, setPromiseStatus] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) return
//     setPromiseStatus({status: 'pending', pokemon: null, error: null})
//     fetchPokemon(pokemonName).then(
//       pokemonData => {
//         setPromiseStatus({
//           status: 'resolved',
//           pokemon: pokemonData,
//           error: null,
//         })
//       },
//       pokemonError => {
//         setPromiseStatus({status: 'rejected', error: pokemonError})
//       },
//     )
//   }, [pokemonName])

//   if (promiseStatus.status === 'rejected') throw promiseStatus.error

//   return promiseStatus.status === 'idle' ? (
//     'Submit a pokemon'
//   ) : promiseStatus.status === 'pending' ? (
//     <PokemonInfoFallback name={pokemonName} />
//   ) : (
//     <PokemonDataView pokemon={promiseStatus.pokemon} />
//   )
// }

// const ErrorFallback = ({error}) => (
//   <div role="alert">
//     There was an error:{' '}
//     <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//   </div>
// )

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <ErrorBoundary FallbackComponent={ErrorFallback} key={pokemonName}>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }

// export default App

//Extra credit 7
// import * as React from 'react'
// import {ErrorBoundary} from 'react-error-boundary'

// import {
//   fetchPokemon,
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [promiseStatus, setPromiseStatus] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) return
//     setPromiseStatus({status: 'pending', pokemon: null, error: null})
//     fetchPokemon(pokemonName).then(
//       pokemonData => {
//         setPromiseStatus({
//           status: 'resolved',
//           pokemon: pokemonData,
//           error: null,
//         })
//       },
//       pokemonError => {
//         setPromiseStatus({status: 'rejected', error: pokemonError})
//       },
//     )
//   }, [pokemonName])

//   if (promiseStatus.status === 'rejected') throw promiseStatus.error

//   return promiseStatus.status === 'idle' ? (
//     'Submit a pokemon'
//   ) : promiseStatus.status === 'pending' ? (
//     <PokemonInfoFallback name={pokemonName} />
//   ) : (
//     <PokemonDataView pokemon={promiseStatus.pokemon} />
//   )
// }

// const ErrorFallback = ({error, onReset}) => (
//   <div role="alert">
//     There was an error:{' '}
//     <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//     <button onClick={onReset}>Try Again</button>
//   </div>
// )

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   const handleReset = () => {
//     setPokemonName('')
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <ErrorBoundary
//           FallbackComponent={ErrorFallback}
//           key={pokemonName}
//           onReset={handleReset}
//         >
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }

// export default App

//Extra credit 8
import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {
  fetchPokemon,
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [promiseStatus, setPromiseStatus] = React.useState({
    status: 'idle',
    pokemon: null,
    error: null,
  })

  React.useEffect(() => {
    if (!pokemonName) return
    setPromiseStatus({status: 'pending', pokemon: null, error: null})
    fetchPokemon(pokemonName).then(
      pokemonData => {
        setPromiseStatus({
          status: 'resolved',
          pokemon: pokemonData,
          error: null,
        })
      },
      pokemonError => {
        setPromiseStatus({status: 'rejected', error: pokemonError})
      },
    )
  }, [pokemonName])

  if (promiseStatus.status === 'rejected') throw promiseStatus.error

  return promiseStatus.status === 'idle' ? (
    'Submit a pokemon'
  ) : promiseStatus.status === 'pending' ? (
    <PokemonInfoFallback name={pokemonName} />
  ) : (
    <PokemonDataView pokemon={promiseStatus.pokemon} />
  )
}

const ErrorFallback = ({error, onReset}) => (
  <div role="alert">
    There was an error:{' '}
    <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    <button onClick={onReset}>Try Again</button>
  </div>
)

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  const handleReset = () => {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          key={pokemonName}
          onReset={handleReset}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
