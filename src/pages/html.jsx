import resources from '../assets/ressurser.js';

export default function Html(){

    const handleGoBack = () => {
        window.history.back(); // Gå tilbake til forrige side i nettleserhistorikken
    };

    // Finn tittelen til HTML-kategorien
    const htmlCategory = resources.find(resource => resource.category === 'html');
    const htmlTitle = htmlCategory ? htmlCategory.category : 'HTML'; // Default tittel hvis kategorien ikke er funnet

    // Filtrer ressurser basert på kategorien 'html'
    const htmlUrls = resources
    .filter(resource => resource.category === 'html')
    .map(resource => ({ title: resource.title, url: resource.url }));

    return(
        <section className="resource">
            <h1 style={{ textDecoration: 'none' }}>{htmlTitle}</h1> {/* Tittel for HTML-kategorien uten understrek */}
            <hr style={{ borderBottom: '2px solid #000' }} /> {/* Tykk linje under tittelen */}
            {htmlUrls.map((htmlUrl, index) => (
                <article key={index}>
                    <h2>{htmlUrl.title}</h2> {/* Tittel for hver ressurs */}
                    <a href={htmlUrl.url}>{htmlUrl.url}</a>
                    {index !== htmlUrls.length - 1 && <hr />} {/* Legg til linje etter hver ressurs, unntatt den siste */}
                </article>
            ))}
            <button onClick={handleGoBack} style={{ float: 'right' }}>Tilbake</button> 
        </section>
    );
}
