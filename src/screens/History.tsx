import { useState } from 'react';
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, VStack, SectionList, Text } from "native-base";

export function History(){
    const [exercises, setExercises] = useState([
        {
            title: '28.08.22',
            data: ['Costa', 'Puxada frontal']
        },
        {
            title: '27.08.22',
            data: ['Puxada frontal']
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios"/>
            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({section}) => (
                    <Heading color={'gray.200'} fontSize={'md'} mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text color={'gray.100'} textAlign={'center'}>
                        Não há exercicios cadastrados ainda {'\n'}
                        :'(
                    </Text>
                )}
            />
        </VStack>
    )
}