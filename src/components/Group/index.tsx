import {Text, Pressable, IPressableProps} from 'native-base';

type Props = Omit<IPressableProps, 'onPress'> & {
  name: string;
  isActive: boolean;
  onPress?: (name: string) => void;
};
export const Group = ({
  name,
  isActive,
  onPress = name => name,
  ...rest
}: Props) => {
  return (
    <Pressable
      mr={3}
      w={24}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems={'center'}
      overflow="hidden"
      onPress={() => onPress(name)}
      isPressed={isActive}
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 2,
      }}
      {...rest}>
      <Text
        color={isActive ? 'green.500' : 'gray.200'}
        textTransform="uppercase"
        fontSize={'xs'}
        fontWeight="bold">
        {name}
      </Text>
    </Pressable>
  );
};
