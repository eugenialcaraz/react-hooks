// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

//Exercise 2, extra credit 1 & 2
// import * as React from 'react'

// function Greeting({initialName = ''}) {
//   const [name, setName] = React.useState(checkStorage)

//   function checkStorage() {
//     return window.localStorage.getItem('name') ?? initialName
//   }

//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//   }, [name])

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// function App() {
//   return <Greeting />
// }

// export default App

//Extra credit 3
import * as React from 'react'

const useLocalStorageState = (storageName, initialValue) => {
  const [name, setName] = React.useState(checkStorage)

  function checkStorage() {
    return window.localStorage.getItem(storageName) ?? initialValue
  }

  React.useEffect(() => {
    window.localStorage.setItem(storageName, name)
  }, [storageName, name])

  return [name, setName]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
