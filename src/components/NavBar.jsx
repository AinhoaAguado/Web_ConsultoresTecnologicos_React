import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navContainer">
            <p className="txtInfoNav">WeHelp<span>You</span></p>
            <img className="btnHamburguer" src="img/hamburguerMenu.png" alt="" />

            <div className="btnNav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/somos">Somos</Link></li>
                    <li><Link to="/contactanos">Contactanos</Link></li>
                    <li><Link to="/equipo">Equipo</Link></li>
                    <li><Link to="/coder">Coder</Link></li>
                </ul>
            </div>
        </nav>
     )
    }

export default Navbar