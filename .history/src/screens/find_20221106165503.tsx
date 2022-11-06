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

            <Heading fontFamily="heading" color="white" fontSize="xl" textAlign="center">
                Encontrar o bolão atravéz de {'\n'} seu código único
            </Heading>

            <Input
            mb={2}
            placeholder="Qual o código do bolão?">
            </Input>
            <Button
            title="CBUSCAR BOLÃO"/>
           

           

        </VStack>
           

        </VStack>
    )
}