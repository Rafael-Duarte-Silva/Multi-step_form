export const planPrice = (yearlyPlan: boolean | undefined, 
    monthly: number | undefined,
    yearly: number | undefined): string => {
    return !yearlyPlan ? `$${monthly}/mo` : `$${yearly}/yr`;
}