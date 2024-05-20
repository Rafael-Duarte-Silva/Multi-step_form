import * as S from './styles';

import { ReactNode } from 'react';

type FormTitleProps = {
    children: ReactNode;
}

export const FormTitle = ({children}: FormTitleProps) => {
    return <S.FormTitle>{children}</S.FormTitle>;
};