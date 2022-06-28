import { useState } from 'react'
interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps){
  return <button className='bg-orange-700 p-2 text-white rounded shadow hover:bg-orange-900 transition-colors'>{props.text ?? 'Defaults'}</button>
}
function App() {
  return (
    <div className='buttonDiv'>
      <Button text='Enviar'/>
      <Button text='Ok'/>
      <Button/>
    </div>
  )
}

export default App