import logo from './assets/logo-color.png'
import {InstagramEmbed} from 'react-social-media-embed';
import './Splash.css'


export function Splash() {
  return (
    <div className="splash">
      <img
        className="logo"
        src={logo}
        alt="bark aid logo"
      />
      <h2>Syracuse, New York</h2>
      <InstagramEmbed
        url="https://www.instagram.com/barkaid315/?utm_source=ig_embed&amp;utm_campaign=loading"
        width={328}
      />
    </div>
  )
}