import * as S from './styles';

import { IconSpinner } from './IconSpinner';

export const Sending = () => {
    return (
        <S.ContainerSending>
            <IconSpinner/>
            <S.SendingText>Sending...</S.SendingText>
        </S.ContainerSending>
    )
};