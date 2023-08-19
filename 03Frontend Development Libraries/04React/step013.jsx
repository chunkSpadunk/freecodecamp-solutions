/* writing first react component from scratch */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My First React Component</h1>
            </div>
        );
    }
}

// here the react component will be rendered
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
