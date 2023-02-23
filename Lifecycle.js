import React, { Component,StrictMode } from 'react'
import { Text, View ,Button} from 'react-native'
import Custom_const from './custom_const'
import * as Constants from './Custom_constant'



class Lifecycle3 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: true,
        };
    }
    onSubmit = () =>
    {
        if (this.state.error) {
            return console.error("error occured");
        }
        else {
            console.log("no error");
        }
        }
    componentDidCatch(error) {
        this.setState({ error: false });
        console.log(this.state.error);
    }
    render() {
        console.log("render will be executed");
        return (
            <StrictMode>
            <View>
                 <Button title="press" onPress={this.onSubmit.bind(this)}></Button>   
                 
            </View></StrictMode>
        )
    }
}
class Second extends Component{
    render() {
        return (
            <View>{this.state.haeding}
                <Text></Text>
            </View>
            
        )
    }
}
export default Lifecycle3
//  export class Lifecycle extends Component {
//      constructor(props) {
//          super(props)
     
//          this.state = {
//               name:'gagan'
//          }
//          console.log("lifecycle constructor")
//      }
//     static getDerivedStateFromProps(props, state) {
//         console.log('getDerivedStateFromProps method')
//         return state;
//     }
    
//     render() {
//         console.log("object lifecycle methods");
//         return (
//             <View>
//                 <Text> lifecycle </Text>
//             </View>
//         )
//     }
// }class Lifecycle2 extends Component{
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'gagandeep'
//         }
//         console.log("hilifecycle2 constructor")
//     }
//    static getDerivedStateFromProps(props, state) {
//        console.log('getDerivedStateFromProps method2')
//        return null;
//    }
//     shouldComponentUpdate() {
//         console.log('lifecycle2 shouldComponentUpdate');
//         return true;
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState) {
//         console.log('snapshotbefore');
//     }
//     componentDidUpdate(prevProps, prevState, snapShot) {
//         console.log('didupdate method');
//     }
//     componentDidCatch(err, info) {
//         console.log('to handle errors')
//     }
//    render() {
//        console.log("object lifecycle2 methods");
//        return (
//            <View>
//                <Text> lifecycle </Text>
//                <Lifecycle/>
//            </View>
//        )
//    }
// }