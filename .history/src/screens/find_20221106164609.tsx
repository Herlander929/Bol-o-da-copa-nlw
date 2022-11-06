import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header";
import Logo from '../assets/logo.svg'
import { Input } from "../components/Input";
import { Button } from './../components/Button';


export function Find() {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" />

        <VStack mt={8} mx={5} alignItems="center">
            <Logo />

            <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                Encontrar o bolão atravéz de {'\n'} seu código único
            </Heading>

            <Input
            mb={2}
            placeholder="Qual o nome do seu bolão?">
            </Input>
            <Button
            title="CRIAR MEU BOLÃO"/>
            <Text
            color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
                Após criar o seu bolão, você receberá um código único que poderá usar para  convidar outras pessoas!
            </Text>

           

        </VStack>
           

        </VStack>
    )
}