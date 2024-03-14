import resources from '../assets/ressurser.js'

export default function React(){

    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const reactUrls = resources
    .filter(resource => resource.category === 'react')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div>
            {reactUrls.map((reactUrl, index) => (
                <div key={index}>
                    <h1>{reactUrl.title}</h1>
                    <a href={reactUrl.url}>{reactUrl.url}</a>
                </div>
        ))}
        </div>
    )
}