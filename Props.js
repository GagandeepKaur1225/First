import React,{useState} from 'react'
import { View, Text,Button } from 'react-native'

const Props = () => {
    const[name,setName]=useState("Gagan")
    return (
        <View>
            <Text style={{ borderColor: 'green', fontSize: 40 }}>
                home component
            </Text>
            <Button title="checkme" onPress={() => setName("Gagandeep")} />
            <User name={name} age={30}/>
        </View>
    )
}
const User = (props) => {
    return (
        <View >
            <Text>NAME:{props.name}</Text>
            <Text>age:{props.age}</Text>
        </View>
    )
}

export default Props
