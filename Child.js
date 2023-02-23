import React, { Component } from 'react'
import { Text, View } from 'react-native'

 class Child extends Component {
    constructor() {
        super();
        this.state = {
            currentVal:0
        }
    }
     componentDidUpdate
     getSnapshotBeforeUpdate(preProps, preState) {
         console.warn(preProps)
         return null 
    } 
    render() {
        return (
            <View>
                <Text>{this.props.data} </Text>
            </View>
        )
    }
}

export default Child
