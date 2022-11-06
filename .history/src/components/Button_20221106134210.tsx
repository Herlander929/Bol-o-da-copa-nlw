import  {Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps{
    title: string;
    type?: 'PRIMARY ' | 'SECUNDARY';
}


export function Button({title, ...rest} : Props) {
    return (
        <ButtonNativeBase 
        w="full"
        
        
        {...rest}>
            <Text>
              {title} 
            </Text>
        </ButtonNativeBase>

    );
}