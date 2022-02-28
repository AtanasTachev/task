import './singleCard.css';

const SingleCard = ({film}) => {

    const twoSentenses = film.description.split('.').slice(0,2).map(x => x + ' .').join('')

    return (
        <li className='single'>
            <img src={film.image} />
            <h3 className='title'>{film.title}</h3>
            <p className='description'>
                {twoSentenses}
            </p>
        </li>
    )

}

export default SingleCard;