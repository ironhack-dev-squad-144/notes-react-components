import React from 'react'; // Always import React when we use JSX
import "./Welcome.css"

// To import the Welcome component
// import Welcome from './Welcome'
export default function Welcome(props) {
  console.log("DEBUG props", props)
  let emoji = ""
  if (props.isDeveloper) emoji = "👩‍💻👨‍💻"
  else emoji = "😀"

  let greetings = "Hello"
  if (props.lang === "pt") greetings = "Olà"
  if (props.lang === "de") greetings = "Hallo"

  return (
    <div className="Welcome">
      {greetings} {props.name}, you are {props.age} {emoji}
    </div>
  )
}

// To import answer
// import { answer } from './Welcome'
export const answer = 42;