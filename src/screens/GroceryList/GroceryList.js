import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GroceryItem from './GroceryItem';

const GroceryList = () => {
  const [groceryData, setGroceryData] = useState([
    { name: 'Chicken', quantity: 1, unit: 'lb', category: 'meat' },
    { name: 'Beef', quantity: 1, unit: 'lb', category: 'meat' },
    { name: 'Milk', quantity: 1, unit: 'gallon', category: 'dairy' },
    { name: 'Cheese', quantity: 1, unit: 'cup', category: 'dariy' },
      
    
  ]);

  const renderItem = ({ item }) => {
    return (
    <GroceryItem name={item.name} isChecked={item.isChecked} />
  )};

  return (
    <View style={styles.container}>
      <FlatList
        data={groceryData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default GroceryList;