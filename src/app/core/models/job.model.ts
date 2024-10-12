export type JobModel = {
    userId?: number;
    id?: string;
    title: string;
    postedBy: string;
    description: string;
    location: string;
    salaryLower: number;
    salaryHigher: number;
    owned: boolean;
    applications: string[];
    date: string;
}