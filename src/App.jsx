import { useState } from 'react'
import './App.css'

function App() {
  const [mute, setMute] = useState(true)
  //    ^component states ^hook which holds the initial value you want to start with
  const [imgUrl, setImgUrl] = useState('../icons/on.svg')
  //     ^state variable
  // let imgSvg; <--don't use a global variable, use a state to know what you want to render on the screen

  const toggle = () => {
    if (mute) {
      // change to false
      let imgSrc = '../icons/off.svg'
      setImgUrl(imgSrc)
      console.log("not on")
      setMute(false)
    } else {
      // change to true
      let imgSrc = '../icons/on.svg'
      setImgUrl(imgSrc)
      console.log("on")
      setMute(true)
    }
  }

  return (
    <>
      <img onClick={() => toggle()} src={imgUrl} alt='sound image' />
    </>
  )
}

export default App
