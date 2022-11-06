import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header";
import Logo from '../assets/logo.svg'
import { Input } from "../components/Input";
import { Button } from './../components/Button';


export function New() {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar novo bolão" />

        <VStack mt={8} mx={5} alignItems="center">
            <Logo />

            <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                Crie o seu próprio bolão da copa {'\n'} 
                e  compartilhe entre amigos!
            </Heading>

            <Input
            mb={2}
            placeholder="Qual o nome do seu bolão?">
            </Input>
            <Button
            title="CRIAR MEU BOLÃO"/>
           

           

        </VStack>
           

        </VStack>
    )
}