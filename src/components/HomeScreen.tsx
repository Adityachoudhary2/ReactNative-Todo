import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AllItem from './AllItem';
import CreateScreen from './CreateScreen';



const HomeScreen: React.FC = () => {
  const [view, setView] = useState<number>(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deshboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? { backgroundColor: 'green' } : null]}
          onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? { color: 'white' } : null]}>All Item</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? { backgroundColor: 'green' } : null]}
          onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? { color: 'white' } : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? { backgroundColor: 'green' } : null]}
          onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? { color: 'white' } : null]}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItem />}
      {view === 1 && <AllItem />}
      {view === 2 && <CreateScreen />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
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
    borderColor: 'green',
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
