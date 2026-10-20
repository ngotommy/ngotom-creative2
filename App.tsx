import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { useState } from 'react';
import { Flower, EMOJIS } from './types';
import FlowerItem from './components/FlowerItem';

export default function App() {
  const [flowers, setFlowers] = useState<Flower[]>([
    { emoji: '🌸', x: 100, y: 100 },
    { emoji: '🌻', x: 200, y: 150 },
  ]);
  const [selectedEmoji, setSelectedEmoji] = useState('🌸');

  const plantFlower = (event: GestureResponderEvent) => {
    const x = event.nativeEvent.locationX;
    const y = event.nativeEvent.locationY;
    setFlowers([...flowers, { emoji: selectedEmoji, x, y }]);
  };

  const pressFlower = (indexToChange: number) => {
    const updated = flowers.map((flower, index) => {
      if (index === indexToChange) {
        const nextIndex = (EMOJIS.indexOf(flower.emoji) + 1) % EMOJIS.length;
        return { ...flower, emoji: EMOJIS[nextIndex] };
      }
      return flower;
    });
    setFlowers(updated);
  };

  const clearGarden = () => {
    setFlowers([]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>Your Garden</Text>
        <Text style={styles.subtitle}>Tap the ground to plant, tap a flower to change it!</Text>
        <Text style={styles.count}>Flowers: {flowers.length}</Text>
      </View>

      <Pressable style={styles.garden} onPress={plantFlower}>
        {flowers.map((flower, index) => (
          <FlowerItem
            key={index}
            flower={flower}
            onPress={() => pressFlower(index)}
          />
        ))}
      </Pressable>

      <View style={styles.controls}>
        <View style={styles.pickerRow}>
          {EMOJIS.map((emoji) => (
            <Pressable
              key={emoji}
              style={[
                styles.pickerItem,
                selectedEmoji === emoji && styles.pickerItemSelected,
              ]}
              onPress={() => setSelectedEmoji(emoji)}
            >
              <Text style={styles.pickerEmoji}>{emoji}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.clearButton} onPress={clearGarden}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  subtitle: {
    fontSize: 14,
    color: '#4caf50',
  },
  count: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  garden: {
    flex: 1,
    backgroundColor: '#8bc34a',
  },
  controls: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    gap: 12,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pickerItem: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  pickerItemSelected: {
    backgroundColor: '#c8e6c9',
    borderWidth: 2,
    borderColor: '#2e7d32',
  },
  pickerEmoji: {
    fontSize: 24,
  },
  clearButton: {
    backgroundColor: '#d32f2f',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
