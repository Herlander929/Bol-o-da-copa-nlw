import  {Button as ButtonNativeBase, Text } from 'native-base';

interface Props {
    title: string;
}


export function Button() {
    return (
        <ButtonNativeBase>
            <Text>
                Entrar com Google
            </Text>
        </ButtonNativeBase>

    );
}