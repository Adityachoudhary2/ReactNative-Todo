import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AllItem from './AllItem';
import CreateScreen from './CreateScreen';

//Define Data Item Type
interface Item {
  id: number;
  name: string;
  stock: number;


}


//Data array With Define Type 
const HomeScreen: React.FC = () => {
  const [view, setView] = useState<number>(0);
  const [data, setdata] = useState<Item[]>([
    { id: 1, name: "English", stock: 5 },
    { id: 2, name: "Science", stock: 15, },
    { id: 3, name: "Mathematics", stock: 9 },
    { id: 4, name: "Chemistry", stock: 50 },
    { id: 5, name: "Physics", stock: 19 },
  ])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deshboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? { backgroundColor: '#72C37AFF' } : null]}
          onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? { color: 'white' } : null]}>All Item</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? { backgroundColor: '#72C37AFF' } : null]}
          onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? { color: 'white' } : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? { backgroundColor: '#72C37AFF' } : null]}
          onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? { color: 'white' } : null]}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItem data={data} />}
      {view === 1 && <AllItem data={data.filter((item) => item.stock < 10)} />}
      {view === 2 && <CreateScreen data={data} setdata={setdata}/>}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: '#72C37AFF',
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
