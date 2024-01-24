import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventCard from './Components/EventCard/EventCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scrollable Action Cards</Text>
      <EventCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading:{
    fontSize: 24,
    fontWeight:700,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});
