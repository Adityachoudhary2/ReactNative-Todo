import {FlatList, StyleSheet, Text, View } from 'react-native'


interface Item{
  id: number;
  name: string;
  stock: number;
}

interface AllItemsProps {
  data: Item[];
}

const AllItem: React.FC<AllItemsProps> = ({data}) => {
  return (
    <View>
     <View style={styles.headingContainer}>
        <Text style={styles.headingtext}>Items</Text>
        <Text style={styles.headingtext}>Quantity</Text>
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
            <Text style={styles.itemtext}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default AllItem

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingtext: {
    fontWeight: "500",
    fontSize: 16,
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