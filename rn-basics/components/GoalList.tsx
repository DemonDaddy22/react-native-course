import { Button, Text, TextInput, View } from 'react-native';

interface Props {}

const GoalList: React.FC<Props> = () => {
  return (
    <View>
      <View>
        <TextInput placeholder='Enter your goal...' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
};

export default GoalList;
