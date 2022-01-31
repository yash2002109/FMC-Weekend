import Classes from './Button_2.module.css';

function Button(props) {
  return <button className={Classes.button + ' ' + Classes.glow_button}>{props.children}</button>;
}

export default Button;
