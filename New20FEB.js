import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Form from './Form';
import Child from './Child'
class New20FEB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    render() {
        return (
            <View>
                <Text> New20FEB </Text>
                {
                    this.state.show ? <Form /> : null
                }
                <Button title="hello"
                    onPress={() => { this.setState({ show: !this.state.show }) }} />
            </View>
        );
    }
}


class New20FEB2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
        }
    }
    componentDidMount() {
        console.log("didmount");
        this.setState({
            data: true,
        })
    }
    render() {
        return (
            <View>
                <Text>
                    did mount is executed when all the items are attatched to the console
                </Text>
            </View>
        );
    }
}
class Feb1 extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        }
    }
    render() {
        return (
            <View>
                { this.state.show ? <Feb1 /> : null}
                < Button title="unm" onPress={
                    () => this.setState({ show: !this.state })
                } />
            </View>
        );
    }
}


 class New20FEB3 extends Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="button"
                onPress={() => this.setState({ data: this.state.data + 1 })} />
            </View>
        )
    }
}

//shouldComponentUpdate(pP,pS) and use of it:always invoked before render method .If we return false from this method then render method will not work and return statement is compulsory in this component
//getSnapshotBeforeUpdate(preprop,prevstate)
class New21 extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        }
    }
    render() {
        return (
            <View>
                <Text>checking the getSnapshotBeforeUpdate method</Text>
                <Child data={this.data} />
            </View>
        )
    
    }
}
export default New21