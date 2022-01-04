import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon});
    setValue('');
    setIcon('');
  };

  const handleSubmit2 = function(e) {
    e.preventDefault();
    props.action({ title: title, icon: icon});
    setValue('');
    setIcon('');
  };

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
          <span className={styles.columnFormSpan}>Title: </span>
          <input className={styles.columnFormTitle}
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
          />
          <span className={styles.columnFormSpan}>Icon: </span>
          <input className={styles.columnFormInput}
                 type="text"
                 value={icon}
                 onChange={e => setIcon(e.target.value)}
          />
    <Button className={styles.columnFormButton}>Add column</Button>
    </form>
  );
};

export default ColumnForm;
