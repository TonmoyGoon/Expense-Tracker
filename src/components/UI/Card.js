import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;  // All extra className will be added under classes

    return <div className={classes}>{props.children}</div>;  // props.children refers to the wrapper under classname Card
}

export default Card;