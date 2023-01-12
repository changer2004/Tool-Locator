import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';



export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        ToolNameFromSearch: "",
        SearchResult: "",
        SearchResultTemp: "WYNIK",
        data: [],
  
        isLoading: true
   };
   this.arrayholder = [];
  }
  
  async getMovies() {
    try {
      const response = await fetch('http://veganmind.eu/zaproszenie/tool-locator.json');
      const json = await response.json();
      this.setState({ data: json.movies });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

   
    
    
  }  


  componentDidMount() {
    this.getMovies();
   


  }


  const [input, setInput] = useState('test');
  render() {
   
    const { data, isLoading } = this.state;
   
  return (
    
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
          <Text style={styles.fontcolor}>Tool Locator 1</Text>
          <Text style={{textAlign: 'center'}}>{this.state.SearchResultTemp}</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
        <Searchbar placeholder="Search"
				onChangeText={(text) => {
					setInput(text);
				}}
				value={input} />
			<StatusBar style="auto" />
         
        </View>
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} >

        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.ToolName}, {item.LocationFab}, {item.LocationPoleRef}</Text>
              )}
          />
        )}
 
        </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontcolor: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 70,
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
