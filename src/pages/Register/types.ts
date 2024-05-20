import { ReactNode } from "react";
import { z } from 'zod';

import { schemaObject } from "./consts/schemaObject";

const schema = schemaObject();

export type FormProps = z.infer<typeof schema>;

export type Prices = {
    monthly: {
        plan: {
            [index: string]: number;
        };

        onlineService: number;
        largerStorage: number;
        customizableProfile: number;
    };

    yearly: {
        plan: {
            [index: string]: number;
        };

        onlineService: number;
        largerStorage: number;
        customizableProfile: number;
    };
}

export type UseFormMultiStep = {
    setYearlyPlan: (boolean: boolean) => void;
    yearlyPlan: boolean;
    setCurrentStep: (number: number) => void;
    currentStep: number;
    lastStep: number;
    setData: (object: FormProps) => void;
}

export type PlanItemProps = {
    id: string;
    value: string;
    title: string;
    yearlyPlan: boolean;
    monthly: number;
    yearly: number;
    children: ReactNode
}

export type RegisterName = 
    "name" | 
    "email" | 
    "phoneNumber" |
    "yearlyPlan" | 
    "plan" | 
    "onlineService" | 
    "largerStorage" | 
    "customizableProfile"
;

export type FormInputItemProps = {
    id: string;
    labelText: string;
    registerName: RegisterName;
    errorsMessages: string | undefined;
    placeholder: string;
    autoComplete: string;
    type: string;
}

export type AddOnsIntemProps = {
    id: string;
    registerName: RegisterName;
    title: string;
    description: string;
    yearlyPlan: boolean;
    monthly: number;
    yearly: number;
}