import './singleCard.css';

const SingleCard = ({film}) => {

    return (
        <li className='single'>
            <img src={film.image} />
            <h3 className='title'>{film.title}</h3>
            <p className='description'>
                {film.description}
            </p>
        </li>
    )

}

export default SingleCard;