import { ExerciseCard } from '@components/ExerciseCard';
import {Group} from '@components/Group';
import {HomeHeader} from '@components/HomeHeader';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import {Center, Text, VStack, FlatList, HStack, Heading} from 'native-base';
import {useState} from 'react';

export const Home = () => {
  const [groupSelected, setGroupSelected] = useState<string>('Costas');
  const [groups, setGroups] = useState<string[]>([
    'Costas',
    'Biceps',
    'Triceps',
    'Ombros',
  ]);
  const [exercises, setExercises] = useState<string[]>([
    'Costas',
    'Biceps',
    'Triceps',
    'Ombros',
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleOpenExerciseDetails = () => {
    navigation.navigate('exercise')
  }
  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group
            name={item}
            isActive={item === groupSelected}
            onPress={setGroupSelected}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 6}}
        my={10}
        maxH={10}
        minH={10}
      />
      <VStack flex={1} px={5}>
        <HStack justifyContent={'space-between'} mb={5}>
          <Heading color="gray.200" fontSize={'sm'}>
            Exercises
          </Heading>
          <Text color="gray.200" fontSize={'sm'}>
            {exercises.length}
          </Text>
        </HStack>
        <FlatList 
            data={exercises}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <ExerciseCard 
                  onPress={handleOpenExerciseDetails}
                />
            )}
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{paddingBottom: 20}}
        />
      </VStack>
    </VStack>
  );
};
