import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    //const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
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
      <form className={styles.columnForm} onSubmit={handleSubmit}>
    <div className={styles.columnFormInput}>
        <span>Title: </span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className={styles.columnFormSpan}>
          <span>Icon: </span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
        </div>
        <div className={styles.columnFormButton}>
          <Button>Add column</Button>
        </div>
  </form>
);
};

export default ColumnForm;
