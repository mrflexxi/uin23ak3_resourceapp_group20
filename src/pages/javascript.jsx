import resources from '../assets/ressurser.js'

export default function Javascript(){

    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const jsUrls = resources
    .filter(resource => resource.category === 'javascript')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div>
            {jsUrls.map((jsUrl, index) => (
                <div key={index}>
                    <h1>{jsUrl.title}</h1>
                    <a href={jsUrl.url}>{jsUrl.url}</a>
                </div>
        ))}
        </div>
    )
}