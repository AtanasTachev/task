import './singleCard.css';

const SingleCard = ({article}) => {
    console.log(article);
    return (
        <li className='single'>
            <img src={article.imageUrl} />
            <h3 className='title'>{article.title}</h3>
            <p className='description'>
                {article.summary}
            </p>
        </li>
    )

}

export default SingleCard;

{/* <img src={animal.image_link} />
<h3 className='title'>{animal.name}</h3>
<p className='description'>
   <b>Latin name:</b>  {animal.latin_name}
</p>
<p className='description'>
    <b>Animal type:</b> {animal.animal_type}
</p>
<p className='description'>
    <b>Diet:</b> {animal.diet}
</p> */}