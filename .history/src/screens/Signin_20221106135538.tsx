import React from "react";
import { Text, Center, Icon} from "native-base";
import {Fontisto} from '@expo/vector-icons';

import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";
import { Loading } from './../components/loading';

export function SignIn(){
    return(
        <Center flex={1} bgColor="gray.900" p={7}>
       <Logo width={212} height={40}/>

       <Button
       title=" Entrar com Google"
       leftIcon={<Icon as ={Fontisto} name="google" color="white" size="md"/>}
       type='SECUNDARY'
       
       />

       <Text color = "white" textAlign="center">
        Não utilizamos nenhuma informação além {'\n'}do seu e-mail para criação da sua conta
       </Text>
      </Center>
    )
}
    