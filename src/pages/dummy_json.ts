export interface Card {
    id: number,
    name: string,
    description?: string,
    value: string
}
export const cards:  Card[] = [{
    id: 1,
    name: 'Potential Attrition',
    description: 'Risk of losing employees',
    value: '10'
},{
    id: 2,
    name: 'Total Employees',
    value: '50'
},{
    id: 3,
    name: 'Project Impact',
    description: 'Risk of deley Project',
    value: '3'
},{
    id: 4,
    name: 'Project Total',
    value: '10'
}]