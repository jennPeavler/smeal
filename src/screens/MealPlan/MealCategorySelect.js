import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Modal } from 'react-native';
import { colors } from '../../style/colors';

const mealCategories = [
  { id: '1', name: 'chicken' },
  { id: '2', name: 'beef' },
  { id: '3', name: 'pork' },
  { id: '4', name: 'fish' },
  { id: '5', name: 'vegetable' },
  { id: '6', name: 'egg' },
];

const MealCategorySelect = ({ selectedMealCategories, setSelectedMealCategories }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [visibleCategoryChoices, setVisibleCategoryChoices] = useState(mealCategories)
  
  const handleSelectMealCategory = ({ category }) => {
    setSelectedMealCategories(prev => {
      if (prev.some(cat => cat.id === category.id )) {
        return prev.filter(cat => cat.id !== category.id); // Deselect
      } else {
        return [...prev, category]; // Select
      }
    });
    setVisibleCategoryChoices(prev => {
      if (prev.some(cat => cat.id === category.id )) {
        return prev.filter(cat => cat.id !== category.id); // Remove from dropdown
      } else {
        return [...prev, category]; // Show in dropdown
      }
    });
  };

  const renderPill = ({ category }) => (
    <View key={`pill-${category.name}`} style={styles.pill}>
      <Text style={styles.pillName}>{category.name}</Text>
      <Pressable onPress={() => handleSelectMealCategory({ category })}>
        <Text style={styles.pillClose}>X</Text>
      </Pressable>
    </View>
  );

  const renderCategory = ({ category }) => (
    <Pressable style={styles.dropdownItem} onPress={() => handleSelectMealCategory({ category })} key={`category-${category.name}`}>
      <Text>{category.name}</Text>
    </Pressable>
  )

  return (
    <View>
      <Pressable onPress={() => setDropdownVisible(!dropdownVisible)} style={styles.dropdownBtn}>
        <Text>Choose Protein</Text>
      </Pressable>
      <Modal visible={dropdownVisible} transparent onRequestClose={() => setDropdownVisible(false)}>
        <Pressable style={styles.modalOverlay} activeOpacity={1} onPressOut={() => setDropdownVisible(false)}>
          <View style={styles.dropdown}>
            {visibleCategoryChoices.map(category => renderCategory({ category }))}
          </View>
        </Pressable> 
      </Modal>

      <View style={styles.pillBox}>
        {selectedMealCategories.map(category => renderPill({ category }))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    
  },
  dropdownBtn: {
    backgroundColor: 'white',
    padding: 12,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 135,
  },
  dropdown: {
    backgroundColor: 'white',
    marginTop: 145,
    width: 135,
  },
  dropdownItem: {
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1
  },
  pillBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  pill: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.green1,
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 15
  },
  pillName: {
    color: 'white',
    marginRight: 10
  },
  pillClose: {
    color: 'white'
  },
});


export default MealCategorySelect;