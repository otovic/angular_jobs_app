export type JobModel = {
    userId?: number;
    jobId?: string;
    title: string;
    postedBy: string;
    description: string;
    location: string;
    salaryLower: number;
    salaryHigher: number;
    date: string;
}