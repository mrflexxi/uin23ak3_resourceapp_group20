import resources from '../assets/ressurser.js'

export default function Css(){

    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const cssUrls = resources
    .filter(resource => resource.category === 'css')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div>
            {cssUrls.map((cssUrl, index) => (
                <div key={index}>
                    <h1>{cssUrl.title}</h1>
                    <a href={cssUrl.url}>{cssUrl.url}</a>
                </div>
        ))}
        </div>
    )
}