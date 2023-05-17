const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
    quantity: 0,
}; // this would set the default property quantity to 0

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {
            /* Change code below this line */
        }
        return <Items quantity={10} />;
        {
            /* Change code above this line */
        }
    }
}
