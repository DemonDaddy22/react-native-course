import { Text, View } from 'react-native';

interface IProps {}

const GameStart: React.FC<IProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Game Start</Text>
    </View>
  );
};

export default GameStart;
