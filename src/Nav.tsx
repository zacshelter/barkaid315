import './Nav.css'
import {useState} from "react";

const ham = 'fa-solid fa-bars fa-2xl'
const close = 'fa-solid fa-x fa-2xl'

export function Nav() {
  const [icon, setIcon] = useState(ham);

  function handleIcon() {
    if (icon === ham) {
      setIcon(close)
    } else {
      setIcon(ham)
    }
  }

  return (
    <div className="nav">
      <a href="https://www.youtube.com/@BarkAidDogTrainersLLC" target="_blank">
        <i className="fa-brands fa-youtube fa-2xl"/>
      </a>
      <a href="https://www.instagram.com/barkaid315" target="_blank">
        <i className="fa-brands fa-instagram fa-2xl"/>
      </a>
      <div className="menu" onClick={handleIcon}>
        {/* todo */}
        {/*<i className={icon}/>*/}
      </div>
    </div>
  )
}