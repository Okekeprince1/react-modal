import "./styles.css";
import {React, useState } from "react"

export default function App() {
  const [firstModal, setFirstModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  
  const openFirstModal = () => {
    setFirstModal(!firstModal)
    console.log(firstModal)
  }

  const openSecondModal = () => {
    setSecondModal(!secondModal)
    setFirstModal(!firstModal)
  }

  const closeSecondModal = () => {
    setSecondModal(!secondModal)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={openFirstModal}>Open first Modal</button>
    {
      firstModal && <div>
        <h1>This is a first Modal</h1>
        <button onClick={openSecondModal}>Open second modal</button>
      </div>
    }

{
      secondModal && <div>
        <h1>This is a Second Modal</h1>
        <button onClick={closeSecondModal}>Close second modal</button>
      </div>
    }
    </div>
  );
}
