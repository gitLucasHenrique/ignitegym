import { useState } from 'react';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home(){
    const [groupSelected, setGroupSelected] = useState('costa');
    const [groups, setGroups] = useState(['costa', 'ombro', 'bíceps', 'tríceps']);

    return (
        <VStack flex={1}>
            <HomeHeader />
            <HStack>
                <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Group
                            name={item}
                            isActive={groupSelected === item}
                            onPress={() => setGroupSelected(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    _contentContainerStyle={{ px: 8 }}
                    my={10}
                    maxH={10}
                />
            </HStack>
            <VStack flex={1} px={8}>
                <HStack justifyContent={'space-between'} mb={5}>
                    <Heading color={'gray.200'} fontSize={'md'}>
                        Exercícios
                    </Heading>
                    <Text color={'gray.200'} fontSize={'sm'}>
                        4
                    </Text>
                </HStack>
                <ExerciseCard />
                <ExerciseCard />
                <ExerciseCard />
            </VStack>
        </VStack>
    )
}