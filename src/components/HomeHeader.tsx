import { TouchableOpacity } from 'react-native'
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack bg={'gray.600'} pt={16} pb={5} px={8} alignItems={'center'}>
            <UserPhoto
                source={{ uri: 'https://github.com/gitlucashenrique.png' }}
                size={16}
                alt="user profile img"
                mr={4}
            />
            <VStack flex={1}>
                <Text color={'gray.100'}>
                    Olá,
                </Text>
                <Heading color={'gray.100'}>
                    Lucas
                </Heading>
            </VStack>
            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name='logout'
                    color={'gray.200'}
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}