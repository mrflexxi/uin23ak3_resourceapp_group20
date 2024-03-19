import { NavLink } from "react-router-dom";
import resources from '../assets/ressurser.js'
import '../styles/main.scss'; // Importerer shared.scss

export default function Home(){

    // Rendrer ut alle navigasjoner
    // Brukte denne Stack Overflow-artikkelen for inspirasjon til navigasjon: https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array
    const categories = Array.from(new Set(resources?.map(resource => resource.category)))
    const renderCategories = ()=>{
        return categories.map((category, index) => (
            <NavLink key={category} to={`/${category}`} className="Home">{category}</NavLink> // Legger til klassenavn for å aktivere stilene for Home-komponenten
            
        ))
    }

    return(
        <>
            <div id="container">
                <div id="nav-cont">
                <nav>
                    {renderCategories()}
                </nav>
                <div id="content-cont">
                </div>
                </div>
            </div>
        </>
    )
}

const TheHomeButton = () => {
    return (
        <NavLink key="home" id="HomeButton" to="/">Home</NavLink>
    );
}

export {TheHomeButton}
