import resources from '../assets/ressurser.js'

export default function Headless(){

    // Filtrerer gjennom alle mulige ressurser via. category og spytter ut tittel og url.
    const headlessUrls = resources
    .filter(resource => resource.category === 'headless-cms')
    .map(resource => ({ title: resource.title, url: resource.url }))

    return(
        <div>
            {headlessUrls.map((headlessUrl, index) => (
                <div key={index}>
                    <h1>{headlessUrl.title}</h1>
                    <a href={headlessUrl.url}>{headlessUrl.url}</a>
                </div>
        ))}
        </div>
    )
}