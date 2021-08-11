import './header.css';
import { Link } from 'react-router-dom';
import imagemFilmaria from "./../../assets/filmaria.png"

export default function Header(){
  return(
    <header>
      <div className="container-header">
      <img src={imagemFilmaria} className="img"/>
      <Link className="logo" to="/" >Filmaria</Link>
      <Link className="favoritos" to="/favoritos" >Salvos</Link>
      </div>
    </header>
  )
}