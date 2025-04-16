import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface IProps extends TouchableOpacityProps {
  icon: any;
  color?: string;
  size?: number;
}

const IconButton: React.FC<IProps> = ({
  icon,
  color = COLORS.ACCENT_1,
  size = 16,
  onPress = () => {},
  ...restProps
}) => {
  return (
    <TouchableOpacity {...restProps} onPress={onPress}>
      <Ionicons name={icon} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;
