import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome, { answer } from './Welcome'
import Box from './Box'

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      <p>The answer is {answer}</p>

      {/* Render the component Welcome with 3 props: {name: "Alice", age: "24", isDeveloper: true} */}
      <Welcome name="Alice" age="24" isDeveloper />
      
      {/* Render the component Welcome with 3 props: {name: "Bob", age: 42, lang="de"} */}
      <Welcome name={"Bob"} age={42} lang="de" />

      <Welcome name={"Joaquim"} age={22} lang="pt" />

      {/* Render the component Box with 2 props: {color: "red", children: "Hello"} */}
      <Box color="red">Hello</Box>
      
      {/* React is going to do: Box({color: "yellow", children: "Hello"}) */}
      <Box color="yellow">Hello</Box>
    </div>
  );
}

export default App;
