import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store'

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    //const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId }));
        setTitle('');
        setIcon('');
    };

    /*const handleSubmit2 = function(e) {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setValue('');
        setIcon('');
      };*/
    return (
      <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div className={styles.columnFormInput}>
        <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={styles.columnFormInput}>
        <span>Icon:</span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      </div>
      <div className={styles.columnFormButton}>
        <Button>Add column</Button>
      </div>
      </form>
    );
  };

export default ColumnForm;
