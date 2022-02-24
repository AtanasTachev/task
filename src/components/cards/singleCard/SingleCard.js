import './singleCard.css';

const SingleCard = ({animal}) => {
// console.log(card);
    return (
        <li className='single'>
            <img src={animal.image_link} />
            <h3>{animal.name}</h3>
            <p>
                Latin name: {animal.latin_name}
            </p>
        </li>
    )

}

export default SingleCard;