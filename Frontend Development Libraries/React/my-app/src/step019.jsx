class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Change code below this line this is the parent component */}
                <Welcome name="I am assigning some kind of a string here" />
                {/* Change code above this line */}
            </div>
        );
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Change code below this line this is the child component */}
                <p>
                    Hello, <strong>{this.props.name}</strong>!
                </p>
                {/* Change code above this line */}
            </div>
        );
    }
}
