import styles from './TextInput.module.scss';

const TextInput = props => {
    return (<input className={styles.input} placeholder={props.placeholer} type="text" />);
};

export default TextInput;
