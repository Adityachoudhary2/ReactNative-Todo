import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

const CreateScreen = () => {
  const [itemName, setItemName] = useState<string>('')
  const [stockAmt, setStockAmt] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name...'
        style={styles.input}
        value={itemName}
        onChangeText={(item: string) => setItemName(item)}
      />
      <TextInput
        placeholder='Enter stock amount'
        style={styles.input}
        value={stockAmt}
        onChangeText={(item: string) => setStockAmt(item)}
      />
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>ADD ITEM IN STOCK</Text>
      </Pressable>

    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    padding: "4%",
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D7F6BFFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#CABFEEFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    
  },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  }
})