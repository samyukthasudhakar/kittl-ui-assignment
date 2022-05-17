import './card.css'

export default function Card({heading, content, link}){
    return(
        <div className='card'>
            <h2>{heading}</h2>
            <p>{content}</p>
            <a href={link} className="card-link">Storybook Link</a>
        </div>
    )
}