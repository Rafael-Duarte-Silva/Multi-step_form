import * as S from './styles';

import { ReactNode } from 'react';

type FormFieldProps = {
    children: ReactNode;
}

export const FormField = ({children}: FormFieldProps) => {
    return <S.FormField>{children}</S.FormField>;
};