import React, { Component } from 'react'
import { Text, TextBase, View, TextInput, Button, Image, TouchableOpacity, Alert,StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Button1 from './Button';
import Custom_const from './custom_const';
import Cust_but from './Cust_but';
import Custom_in from './Custom_in';
import Cust_view from './Cust_view';
import Custom_opac from './Custom_opac'
class Form_task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidepass: true,
            isSelect: false,
            email: '',
            isSelect1: false,
            emailErr: '',
            pass: ' ',
            passErr: '',
            focus:false,
        }
    }
    onSubmit = () => {
        this.props.navigation.navigate('ThirdScreen');
        
    }
    showpass = () => {
        // console.log("hello");
        this.setState({ hidepass: !this.state.hidepass })
    }
    onNavigate = () => {
        this.props.navigation.navigate('Screen_for_signup')
    }
    go = (value) => {
        // console.log(value.length,"POPOP")
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.length == 0) {
            this.setState({ email: "" });
            this.setState({ emailErr: "" });
        } else if (reg.test(value) !== true) {
            this.setState({ emailErr: "Enter Correct Email address" });
        } else {
            this.setState({ email: value });
            this.setState({ emailErr: "" });
        }
    }
    go2 = (value) => {
        // console.log(value.length,"1234")
        const reg = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (value.length == 0) {
            this.setState({ passErr: "" });
            this.setState({ pass: "" });
        } else if (reg.test(value) !== true) {
            this.setState({ passErr: "password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters" });
        } else {
            this.setState({ pass: value });
            this.setState({ passErr: "" });
        }
    }
    alert_touchable = () => {
        alert('alert');
        
    }
     getData = async () => {
        try {
            console.log("inside try");
            const jsonValue = await AsyncStorage.getItem('@user')
            //     .then((res) => {
            //     console.log(res,"res is this")
            // });
            console.log(jsonValue,"out side val");
        } catch(e) {
            console.log("error");
        }
        //  return jsonValue != null ? JSON.parse(jsonValue) : null;
      }
    componentDidMount() {
        this.getData();
    }
    render() {
        console.log(this.state.email);
        return (
            <View style={{ marginHorizontal: 40 }}>
                <TouchableOpacity onPress={this.alert_touchable.bind(this)}  style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}><Image style={{ height: 60, width: 60 }}
                source={require('./assets/login.jpeg')} />
                    <Text style={{ fontSize: 40, marginBottom: 20 }} > Login         </Text>
                    <Image style={{ height: 60, width: 60 }}
                        source={require('./assets/cross.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15 }}>{`Login to your account - enjoy exclusive \nfeatures and many more.\n`} </Text>
                <Custom_in name="Email" required></Custom_in>
                <Cust_view onChangeText={this.go.bind(this)}>
                    <Custom_const 
                        placeholder="email"
                        required
                        inputMode="email"
                        onChangeText={this.go.bind(this)}>
                    </Custom_const>
                    
                </Cust_view><View><Text style={{ color: "red" }}>
                    {this.state.emailErr}
                </Text>
                </View>
                
                <Custom_in name="Password" required></Custom_in>
                <View style={style1.view2}>
                    <View style={{ flex:1,flexDirection:'row' }}>
                     <Cust_view 
                            placeholder="password"
                            required
                            secureTextEntry={this.state.hidepass}
                            onChangeText={this.go2.bind(this)}
                            >
                        </Cust_view><TouchableOpacity  onPress={()=>this.showpass()}
                        ><Image style={{ height: 35, width: 30, position: "absolute", right: 10, top: 13,  }}
                        
                        source={
                            this.state.hidepass
                            ? require('./assets/show_p.png')
                            : require('./assets/hide_p.png')
                        }
                        /></TouchableOpacity>
                            </View>
                     </View>
                      <View><Text style={{ color: "red" }}>
                    {this.state.passErr}
                </Text></View>
                <View>
                    <TouchableOpacity style={{right:13}} onPress={()=>alert("signup")}>
                        <Text style={style1.signupText} onPress={() => navi}>signup</Text>
                    </TouchableOpacity>
                </View>
                <View> 
                    <Cust_but name="LOGIN"  onPress={() =>this.onSubmit()}></Cust_but>
                    <Text style={{
                        alignSelf: 'center',
                        marginTop: 25
                    }}>Or</Text>
                     <Cust_but name="SIGNUP"  onPress={() =>this.onNavigate()}></Cust_but>
                    <Cust_but   src={require('./assets/logo_g.png')} name="Google" backgroundColor='#00008B' onPress={this.onSubmit.bind(this)}></Cust_but>
                    <Cust_but backgroundColor="" src={require('./assets/logo_t.jpeg')} name="Twitter" backgroundColor='#00008B'></Cust_but>
                </View>
            </View>
        )
    }
}


export default Form_task;
const style1 = StyleSheet.create({
    div: {
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 10
        
    },
    view2:{
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 10, height: 38,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    signupText: {
        color: '#0000FF',
        textAlign:'right'
    }
});





{/* <View style={{ flexDirection: 'row', marginTop: 15}}>
<CheckBox value={this.state.isSelect1}
onValueChange={() => this.setState({ isSelect1: !this.state.isSelect1 })}
style={{ height: 20, width: 30 }}></CheckBox>
<Text style={{ fontSize: 16, marginBottom: 40 }}>Remember me</Text>
<Text style={{ fontSize: 16, marginBottom: 40 }}>          Forgot Password?</Text></View>*/}


// var v1 = this.state.email;
// var v2=this.state.pass
// if (v1 === ""|| v2==="") {
//     Alert.alert(
//         'enter the right and full details'
//     );
// }else {
//     Alert.alert(
//         this.state.email, this.state.pass,
//         'message'
//     );
// }
    