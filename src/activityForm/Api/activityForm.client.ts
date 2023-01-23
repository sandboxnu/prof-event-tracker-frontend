import { CreateActivityDto } from "./activityForm.dto";

const apiRoot = 'http://localhost:3001/activities/'
export const createActivity = async (body: CreateActivityDto): Promise<boolean>  => {
    try {
        const response = await fetch(apiRoot, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            body: JSON.stringify(body),
        });
        return (response.ok || response.status === 201)
    }
    catch {
        return false;
    }
};