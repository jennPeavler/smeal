import { StyleSheet, View, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../style/colors'

export const StarRating = () => {
  return (
    <View style={styles.stars}>
      <FontAwesome name="star" size={24} color={`${colors.yellow}`} style={styles.star}/>
      <FontAwesome name="star" size={24} color={`${colors.yellow}`} style={styles.star}/>
      <FontAwesome name="star" size={24} color={`${colors.yellow}`} style={styles.star}/>
      <FontAwesome name="star" size={24} color={`${colors.yellow}`} style={styles.star}/>
      <FontAwesome name="star" size={24} color={`${colors.yellow}`} style={styles.star}/>
    </View>
  )
}

const styles = StyleSheet.create({
  stars: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
})