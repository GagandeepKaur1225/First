import React,{useState} from 'react'
import { View, Text,StyleSheet, TouchableOpacity,TextInput ,Image} from 'react-native'

const Cust_view = (props) => {
    const [focus, setFocus] = useState(false);
    return (
        <View 
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={props.onChangeText}
        ><TextInput style={
            focus?[styles.focused,styles.normal]:[styles.normal]
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
                onChangeText={props.onChangeText}
                
        autoCapitalize="none"
        secureTextEntry={props.secureTextEntry}
        
            >
              
            </TextInput>
            
        
            
        
        </View>
    )
}
const styles = StyleSheet.create(
    {
        normal: {
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "",
            borderWidth: 2,
            borderRadius: 8,
            marginBottom: 20,
            marginTop: 10,height:40,width:300
            },
       focused: {
        alignItems: 'center',
        backgroundColor: 'white',
           height: 40, width: 310,
           display:'flex',
            flexDirection: 'row',
           borderWidth: 2,
           borderRadius: 2,
           borderColor:'#0000FF'
       }
    }
)
export default Cust_view
           
            

