import {HistoryCard} from '@components/HistoryCard';
import {ScreenHeader} from '@components/ScreenHeader';
import {SectionList, VStack, Heading, Text, Center} from 'native-base';
import {useState} from 'react';

export const History = () => {
  const [exercises, setExercises] = useState([
    {title: '26.08.22', data: ['Puxada Frontal', 'Puxada Lateral']},
    {title: '26.08.22', data: ['Puxada Frontal']},
    {title: '26.08.22', data: ['Puxada Frontal']},
    {title: '26.08.22', data: ['Puxada Frontal']},
    {title: '26.08.22', data: ['Puxada Frontal']},
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title={'Exercise History'} />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => <HistoryCard />}
        renderSectionHeader={({section}) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily={'heading'}>
            {section?.title}
          </Heading>
        )}
        px={4}
        contentContainerStyle={
          exercises.length
            ? {paddingBottom: 60}
            : {flex: 1, justifyContent: 'center'}
        }
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={() => (
          <Text color="gray.200" textAlign="center">
            No Exercises Registered! {'\n'}
            It is time to start work out, isn't it?
          </Text>
        )}
      />
    </VStack>
  );
};
