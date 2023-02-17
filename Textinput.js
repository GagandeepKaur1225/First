import React,{useState} from 'react'
import { View, Text, TextInput } from 'react-native'

const Textinput = () => {
    const [name, setName] = useState("");
    return (
        <View>
            <Text>your name is:{name}</Text>
            <TextInput
                style={{ fontSize: 40, color: 'red', borderColor: 'blue' }}
                placeholder={"enter your name"}
                value={name}
                onChangeText={(text) => setName(text)}
            />
        </View>
    )
}

export default Textinput
