import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

class App extends Component{
  state={
    counter:0,
    title:'Counter',
    TeamA:'Man Chester City'
  }

  updateState=()=>{
    this.setState({
       counter:0
    })
  }

  incrementCount=()=>{
    this.setState({
      counter:this.state.counter+1
    })
  }
  decrementCount=()=>{
    this.setState({
      counter:this .state.counter-1
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>English Premier League</Text>
        <Text style={styles.text}>Score: {this.state.counter}</Text>
        <Text style={styles.text}>Team: {this.state.TeamA}</Text>
        <Text style={styles.text2} onPress={()=>this.updateState()}>Update</Text>
        <Button title="Increment" color="blue" onPress={()=>this.incrementCount()} />
        <Button title="Decrement" color="brow " onPress={()=>this.decrementCount()} />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,justifyContent:'center',
  },
  text:{
    textAlign:'center',marginVertical:8
  },
  text2:{
    textAlign:'center',
    color:'red',
    backgroundColor:'endregion '
  }
})
export default App