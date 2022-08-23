import { useState, useEffect } from "react"
const CounterFunctional = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('inside effect')
    return () => console.log('cleanup called')
  })
  console.log("heelo")
  return (
    <div>
      <h1>Counter ----- functional</h1>
      
      <button onClick={() => { setCount(count + 1)}} >Increment Count</button>
      <button onClick={() => { setCount(count - 1)}} >Decrement Count</button>

      <p>{count}</p>
    </div>
  )

}
export default CounterFunctional