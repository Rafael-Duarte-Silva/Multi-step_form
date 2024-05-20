import * as S from './styles';

import { FormField } from '../FormField';
import { FormTitle } from '../FormTitle';
import { FormLegend } from '../FormLegend';
import { FormInputItem } from './FormInputItem';

import { useFormContext } from 'react-hook-form';

import { FormProps } from '../../types';

export const YourInfo = () => {
    const {formState: { errors }} = useFormContext<FormProps>();

    return (
        <>
            <FormTitle>Personal info</FormTitle>
            <FormField>
                <FormLegend>
                    Please provide your name, email address, and phone number.
                </FormLegend>

                <S.formInputList>
                    <FormInputItem
                        id='formInputName'
                        labelText='Name'
                        registerName='name'
                        errorsMessages={errors.name?.message}
                        placeholder='e.g. Stephen King'
                        autoComplete='name'
                        type='text'
                    />
                    <FormInputItem
                        id='formInputEmail'
                        labelText='Email Address'
                        registerName='email'
                        errorsMessages={errors.email?.message}
                        placeholder='e.g. stephenking@lorem.com'
                        autoComplete='email'
                        type='email'
                    />
                    <FormInputItem
                        id='formInputPhoneNumber'
                        labelText='Phone Number'
                        registerName='phoneNumber'
                        errorsMessages={errors.phoneNumber?.message}
                        placeholder='e.g. +1 234 567 890'
                        autoComplete='tel'
                        type='tel'
                    />
                </S.formInputList>
            </FormField>
        </>
    );
};