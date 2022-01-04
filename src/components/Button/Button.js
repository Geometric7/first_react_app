import styles from './Button.module.scss'

const Button = ({children,...rest}) => {
  return (<button className={styles.button}>{children}</button>); //strzałkowa - blokowa
}

/*const Button2 = props => (<button Data-x="1" className={styles.button}>{props.children}</button>); // strzałkowa - liniowa


const Button3 = function (props) {
  return (<button Data-y="1" className={styles.button}>{props.children}</button>); //anoninowa
};

function Button(props) {
  return (<button Data-z="1" className={styles.button}>{props.children}</button>); //nazwana
}*/


export default Button;
