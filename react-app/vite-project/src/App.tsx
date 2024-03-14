import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function MyTestButon() {
  return (
    <button>
      Im for test button.
    </button>
  )
}

const user = {
  name : 'Hi dhaka',
} 

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const food = [
  {title: 'apple', id:1},
  {title: 'orange', id:2},
  {title: 'egg', id:3},
]

const list = food.map(f => 
  <li key={f.id}>
    {f.title}
  </li>

  )

let content;
let isLoggedIn = false;
if(isLoggedIn) {
  content = <MyButton />;
} else {
  content = <MyTestButon />;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="background">Hello World!</h1>
      <h1 className="background">{content}</h1>
      <h1 className="background">{user.name}</h1>
      <MyButton />

      <br></br>

      <ul>{list}</ul>


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
