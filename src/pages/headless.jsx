import resources from '../assets/ressurser.js'
import  {TheHomeButton } from './home.jsx';

export default function Headless(){

    const handleGoBack = () => {
        window.history.back(); // Gå tilbake til forrige side i nettleserhistorikken
    };

    // Finn tittelen til HTML-kategorien
    const htmlCategory = resources.find(resource => resource.category === 'headless-cms');
    const htmlTitle = htmlCategory ? htmlCategory.category : 'headless-cms'; // Default tittel hvis kategorien ikke er funnet

    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const headlessUrls = resources
    .filter(resource => resource.category === 'headless-cms')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <section className="resource">
             {TheHomeButton()}
            <h1 style={{ textDecoration: 'none' }}>{htmlTitle}</h1> {/* Tittel for HTML-kategorien uten understrek */}
            <hr style={{ borderBottom: '2px solid #000' }} /> {/* Tykk linje under tittelen */}

            {headlessUrls.map((headlessUrl, index) => (
                <article key={index}>
                    <h2>{headlessUrl.title}</h2>
                    <a href={headlessUrl.url}>{headlessUrl.url}</a>
                    {index !== headlessUrls.length - 1 && <hr />} {/* Legg til linje etter hver ressurs, unntatt den siste */}
                </article>
        ))}
            
            <button onClick={handleGoBack} style={{ float: 'right' }}>Tilbake</button> 
        </section>
    )
}