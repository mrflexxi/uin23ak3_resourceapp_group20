import resources from '../assets/ressurser.js';

export default function Css() {

    const handleGoBack = () => {
        window.history.back(); // Gå tilbake til forrige side i nettleserhistorikken
    };
    
    // Finn tittelen til HTML-kategorien
    const htmlCategory = resources.find(resource => resource.category === 'css');
    const htmlTitle = htmlCategory ? htmlCategory.category : 'css'; // Default tittel hvis kategorien ikke er funnet
    
    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const cssUrls = resources
        .filter(resource => resource.category === 'css')
        .map(resource => ({ title: resource.title, url: resource.url }));

    return (
        <div className="resource">
            <h1 style={{ textDecoration: 'none' }}>{htmlTitle}</h1> {/* Tittel for HTML-kategorien uten understrek */}
            <hr style={{ borderBottom: '2px solid #000' }} /> {/* Tykk linje under tittelen */}
            
            {cssUrls.map((cssUrl, index) => (
                <div key={index}>
                    <h2>{cssUrl.title}</h2> {/* Tittel for hver ressurs */}
                    <a href={cssUrl.url}>{cssUrl.url}</a>
                    {index !== cssUrls.length - 1 && <hr />} {/* Legg til linje etter hver ressurs, unntatt den siste */}
                </div>
            ))}
            <button onClick={handleGoBack} style={{ float: 'right' }}>Tilbake</button> 
        </div>
        
    )
    
}
