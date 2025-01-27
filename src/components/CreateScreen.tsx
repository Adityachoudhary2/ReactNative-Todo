import { FlatList, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'


type Item = {
  id: number;
  name: string;
  stock: number;
};

type CreateScreenProps = {
  data: Item[];
  setdata: React.Dispatch<React.SetStateAction<Item[]>>
}

const CreateScreen: React.FC<CreateScreenProps> = ({ data, setdata }) => {
  const [itemName, setItemName] = useState<string>('')
  const [stockAmt, setStockAmt] = useState<string>('')
  const [isEdit, setisEdit] = useState<boolean>(false)
  const [editItemId, seteditItemId] = useState<number | null>(null)

  const AddItemhandle = () => {
    const newDataItem: Item = {
      id: Date.now(),
      name: itemName,
      stock: parseInt(stockAmt),
    }
    setdata([...data, newDataItem])
    setItemName('')
    setStockAmt("")
    setisEdit(false)
  }

  const deleteItemHandler = (id: number) => {
    setdata(data.filter((item) => item.id !== id))

  }
  const editItemHandler = (item: Item) => {
    setisEdit(true);
    setItemName(item.name);
    seteditItemId(item.id);

  };

  const updateItemHandler = () => {
    setdata(
      data.map((item) =>
        item.id === editItemId
          ? { ...item, name: itemName, stock: parseInt(stockAmt) }
          : item
      )
    );
    setItemName('');
    setStockAmt('');
    seteditItemId(null);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name...'
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={(item: string) => setItemName(item)}
      />
      <TextInput
        placeholder='Enter stock amount'
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={(item: string) => setStockAmt(item)}
      />
      <Pressable style={styles.button} onPress={() => (isEdit ? updateItemHandler() :AddItemhandle())}>
        <Text style={styles.btnText}>{isEdit ? 'Edit ITEM IN STOCK' : 'ADD ITEM IN STOCK'}</Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingtext}>All Items in the stock</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 10 ? "#FFCCCC" : "#D7F6BFFF" },
              ]}
            >
              <Text style={styles.itemtext}>{item.name}</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={styles.itemtext}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemtext}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemtext}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

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
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingtext: {
    fontWeight: "500",
    fontSize: 16,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemtext: {
    fontWeight: "400",
    fontSize: 15,
  },
})