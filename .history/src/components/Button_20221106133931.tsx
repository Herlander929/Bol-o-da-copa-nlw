import  {Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps{
    title: string;
}


export function Button({title, ...rest} : Props) {
    return (
        <ButtonNativeBase>
            <Text>
              {title} 
            </Text>
        </ButtonNativeBase>

    );
}