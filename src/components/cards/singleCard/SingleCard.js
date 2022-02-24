import './singleCard.css';

const SingleCard = ({animal}) => {
    return (
        <li className='single'>
            <img src={animal.image_link} />
            <h3 className='title'>{animal.name}</h3>
            <p className='description'>
               <b>Latin name:</b>  {animal.latin_name}
            </p>
            <p className='description'>
                <b>Animal type:</b> {animal.animal_type}
            </p>
            <p className='description'>
                <b>Diet:</b> {animal.diet}
            </p>
        </li>
    )

}

export default SingleCard;