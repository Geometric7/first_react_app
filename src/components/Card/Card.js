import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux'
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const flagFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  }

  const removeFavorite =() => {
    dispatch(removeCard(props.id))
  }

    return (
      <li className={styles.card}>
      <div>{props.title}</div>
      <div>
        <button onClick={flagFavorite} className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isFavorite)}></button>
        <button onClick={removeFavorite} className={clsx("fa fa-trash", styles.button, styles.trash)}></button>
      </div>
      </li>
    )
}


export default Card;
