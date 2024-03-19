import resources from '../assets/ressurser.js'
import  {TheHomeButton } from './home.jsx';

export default function Javascript(){

    const handleGoBack = () => {
        window.history.back(); // Gå tilbake til forrige side i nettleserhistorikken
    };
    
    // Finn tittelen til javascript-kategorien
    const htmlCategory = resources.find(resource => resource.category === 'javascript');
    const htmlTitle = htmlCategory ? htmlCategory.category : 'javascript'; // Default tittel hvis kategorien ikke er funnet

    
    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const jsUrls = resources
    .filter(resource => resource.category === 'javascript')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div className="resource">
             {TheHomeButton()}
            <h1 style={{ textDecoration: 'none' }}>{htmlTitle}</h1> {/* Tittel for HTML-kategorien uten understrek */}
            <hr style={{ borderBottom: '2px solid #000' }} /> {/* Tykk linje under tittelen */}
            
            {jsUrls.map((jsUrl, index) => (
                <div key={index}>
                    <h2>{jsUrl.title}</h2> {/* Tittel for hver ressurs */}
                    <a href={jsUrl.url}>{jsUrl.url}</a>
                    {index !== jsUrls.length - 1 && <hr />} {/* Legg til linje etter hver ressurs, unntatt den siste */}
                </div>
        ))}
           
        <button onClick={handleGoBack} style={{ float: 'right' }}>Tilbake</button> 
        </div>
    )
}