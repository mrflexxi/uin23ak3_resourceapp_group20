import resources from '../assets/ressurser.js'
import  {TheHomeButton } from './home.jsx';

export default function React(){

    const handleGoBack = () => {
        window.history.back(); // Gå tilbake til forrige side i nettleserhistorikken
    };

     // Finn tittelen til HTML-kategorien
     const htmlCategory = resources.find(resource => resource.category === 'react');
     const htmlTitle = htmlCategory ? htmlCategory.category : 'react'; // Default tittel hvis kategorien ikke er funnet
    
     // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const reactUrls = resources
    .filter(resource => resource.category === 'react')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div className="resource">
             {TheHomeButton()}
            <h1 style={{ textDecoration: 'none' }}>{htmlTitle}</h1> {/* Tittel for HTML-kategorien uten understrek */}
            <hr style={{ borderBottom: '2px solid #000' }} /> {/* Tykk linje under tittelen */}

            {reactUrls.map((reactUrl, index) => (
                <div key={index}>
                    <h2>{reactUrl.title}</h2> {/* Tittel for hver ressurs */}
                    <a href={reactUrl.url}>{reactUrl.url}</a>
                    {index !== reactUrls.length - 1 && <hr />} {/* Legg til linje etter hver ressurs, unntatt den siste */}
                </div>
        ))}
            
        <button onClick={handleGoBack} style={{ float: 'right' }}>Tilbake</button> 
        </div>
    )
}