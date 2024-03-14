import resources from '../assets/ressurser.js'

export default function Html(){

    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const htmlUrls = resources
    .filter(resource => resource.category === 'html')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div>
            {htmlUrls.map((htmlUrl, index) => (
                <div key={index}>
                    <h1>{htmlUrl.title}</h1>
                    <a href={htmlUrl.url}>{htmlUrl.url}</a>
                </div>
        ))}
        </div>
    )
}