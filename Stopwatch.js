import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sec: 0,
      minute: 0,
      hour: 0,
    }
  }
  start = () => {
    if (this.state) {
      this.interval = setInterval(() => {
        if (this.state.sec !== 59) {
          this.setState({
            sec: ++this.state.sec
          });
        } else {
          this.setState({
            sec: 0,
            minute: ++this.state.minute
          });
        }
      }, 1000);

    } else {
      clearInterval(this.interval);
    }
  };
  reset = () => {
    this.setState({
      minute: 0,
      sec: 0,
      hour: 0,

    });
    clearInterval(this.interval);
  }
  pause = () => {
    this.setState({
      minute: this.state.minute,
      sec: this.state.sec,
      hour: this.state.hour,
    });
    clearInterval(this.interval);
  }


  render() {
    return (
      <View>
        <Text style={{ alignItems: 'center' }}> {this.state.hour}:{this.state.minute}:{this.state.sec}</Text>
        <Button title="start" onPress={this.start.bind(this)} />
        <Button title="reset" onPress={this.reset.bind(this)} />
        <Button title="pause" onPress={this.pause.bind(this)} />
      </View>
    )
  }
}
export default Stopwatch
