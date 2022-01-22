import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
//import Card from '../Card/Card';
//import { useState } from 'react';
//import shortid from 'shortid';
import { getAllColumns } from '../../redux/store';

const List = () => {

  /*const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is life' },
        { id: 2, title: 'The Shining' }
      ]
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' }
      ]
    }
  ]);*/

  /*const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
  };

  const addCard = (newCard, columnId) => {
    console.log(newCard)
		const columnsUpdated = columns.map(column => {
			if(column.id === columnId)
				return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title, columnId, }]}
			else
				return column;
		})

		setColumns(columnsUpdated);

	};*/

  /*useEffect(() => {
    	setTimeout(() => {
        setColumns([...columns, { id: 4, title: 'Test column'}]);
      }, 2000);
    }, []);*/

  const columns = useSelector(state => getAllColumns(state));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out!</p>
      <section className={styles.columns}>
        {columns.map(column => <Column
          key={column.id}
          {...column} />
        )}
      </section>
      <ColumnForm />
    </div>
  );

};

export default List;
