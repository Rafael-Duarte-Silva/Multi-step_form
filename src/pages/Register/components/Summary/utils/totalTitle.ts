export const totalTittle = (yearlyPlan: boolean | undefined): string => {
    return `Total (per ${yearlyPlan ? 'year' : 'month'})`;
}