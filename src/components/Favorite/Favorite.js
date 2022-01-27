import PageTitle from '../PageTitle/PageTitle'
import styles from './Favorite.module.scss';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux'
import { getFavoriteCards } from '../../redux/cardsRedux';
import { Routes, Route } from 'react-router-dom';
import Home from '../../components/Home/Home'



const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));
    if(cards.length === 0)
    return (
      //<Routes>
        //<Route path="/" element={<Home />} />
      //</Routes>
        <h1 className={styles.nofav}>No cards...</h1>
    );

  return (
    <>
      <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
        </ul>
        </article>
    </>
  );
};

export default Favorite;
