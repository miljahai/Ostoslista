import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, {key:text}]);
    setText('');
  }

  const clear = () => {
    setData([]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value= {text}/>
      <View style={styles.operators}>
        <View style={styles.button}>
          <Button title='Add' onPress={buttonPressed}/>
        </View>
        <View style={styles.button}>
          <Button title='Clear' onPress={clear}/>
        </View>
      </View>
      <FlatList style={styles.list} data={data} renderItem={({item}) => 
      <Text>{item.key}</Text>} keyExtractor={(item, index) => index.toString()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200  , 
    borderColor: 'black', 
    borderWidth: 2,
    marginTop: 200
  },
  operators: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  list: {

  },
  button: {
    margin: 10,
  },
});
