import * as S from './styles';

import { ReactNode } from 'react';

type FormLegendProps = {
    children: ReactNode;
}

export const FormLegend = ({children}: FormLegendProps) => {
    return <S.FormLegend>{children}</S.FormLegend>;
};