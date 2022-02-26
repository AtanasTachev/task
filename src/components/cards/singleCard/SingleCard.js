import './singleCard.css';

const SingleCard = ({film}) => {

    let descriptionArray = film.description.split('.');

    let twoSentences = descriptionArray.slice(0,2).join('.');

    return (
        <li className='single'>
            <img src={film.image} />
            <h3 className='title'>{film.title}</h3>
            <p className='description'>
               <b>Description</b>  {twoSentences}
            </p>

        </li>
    )

}

export default SingleCard;