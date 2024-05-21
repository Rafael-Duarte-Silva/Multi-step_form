import * as S from './styles';

import { useFormContext } from 'react-hook-form';

import { FormProps } from '../../types';
import { FormInputItemProps } from '../../types';

export const FormInputItem = ({
    id = '',
    labelText = '',
    registerName = 'name',
    errorsMessages = '',
    placeholder = '',
    autoComplete = '',
    type = ''
}: FormInputItemProps) => {
    const { register } = useFormContext<FormProps>();

    return (
        <S.formInputItem>
            <S.FormLabel htmlFor={id}>
                {labelText}

                <S.FormLabelError>{errorsMessages}</S.FormLabelError>
            </S.FormLabel>
            <S.FormInput
                $invalid={errorsMessages ? true : false}
                id={id}
                placeholder={placeholder}
                autoComplete={autoComplete}
                type={type}
                {...register(registerName)}
            />
        </S.formInputItem>
    );
}