import { StyleSheet, Text, Pressable } from 'react-native';
import { Flower, FLOWER_SIZE } from '../types';

type FlowerItemProps = {
  flower: Flower;
  onPress: () => void;
};

export default function FlowerItem({ flower, onPress }: FlowerItemProps) {
  return (
    <Pressable
      style={[
        styles.flowerBox,
        { left: flower.x - FLOWER_SIZE / 2, top: flower.y - FLOWER_SIZE / 2 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.emoji}>{flower.emoji}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flowerBox: {
    position: 'absolute',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: FLOWER_SIZE,
  },
});
