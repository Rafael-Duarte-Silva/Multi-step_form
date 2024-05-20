export const headerTitle = (plan: string | undefined, yearlyPlan: boolean | undefined): string => {
    return `${plan}(${yearlyPlan ? 'yearly' : 'Monthly'})` || '';
}