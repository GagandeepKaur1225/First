import React,{useState,useEffect} from 'react'
import { View, Text, Button, TextInput } from 'react-native'

const Hook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
    })
    const Increment6 = () => {
        for (let i = 0; i < 6; i++){
            setCount(count=> count+1)
        }
    }
    return (
        <View>
            <Text>use lifecycycle hooks in functional components</Text>
            <Text style={{alignSelf:'center'}}>{count}</Text>
            <Button onPress={() => setCount(count )} title="onclick" />
            <Button onPress={() => setCount(count + 1)} title="increment" />
            <Button onPress={() => setCount(count - 1)} title="decrement" />
            <Button onPress={() => setCount(count + 5)} title="increment5" />
            <Button onPress={Increment6} title="increment6" />
        </View>
    )
}

const Hook1 = () => {
    const[name,setName]=useState({first:" ",lastName:" "})
    return (
        <View>
            <TextInput placeholder="first name" onChangeText={e => {
                 setName({ ...name, first: e.value })
            }}></TextInput>
            <TextInput placeholder="last name" onChange={e => setName({...name,lastName:e.target.value})}></TextInput>
            <Text>your first name is:{name.first}</Text>
            <Text>your last name is:{name.last}</Text>
            <Text>{name.first}</Text>
        </View>
    )
}


function Hook3() {
    return (
        <div>
            
        </div>
    )
}





export default Hook1;
