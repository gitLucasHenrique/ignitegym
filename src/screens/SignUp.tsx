import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base";
import { useNavigation } from '@react-navigation/native'

import BgImg from "@assets/background.png"
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={10}>
                <Image
                    source={BgImg}
                    defaultSource={BgImg}
                    alt="People Training"
                    resizeMode="contain"
                    position={"absolute"}
                />
                <Center my={24}>
                    <LogoSvg />
                    <Text color={"gray.100"} fontSize={"sm"}>
                        Treine sua mente e seu corpo
                    </Text>
                </Center>
                <Center>
                    <Heading color={"gray.100"} mb={6} fontSize={"xl"} fontFamily={"heading"}>
                        Crie sua conta
                    </Heading>
                    <Input
                        placeholder="Nome"
                        keyboardType="default"
                        autoCapitalize="words"
                    />
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                    />
                    <Input
                        placeholder="Confirme a senha"
                        secureTextEntry
                    />
                    <Button title="Criar e acessar"/>
                </Center>
                <Button
                    title="Voltar para o login"
                    mt={24}
                    variant={"outline"}
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
        
    );
}