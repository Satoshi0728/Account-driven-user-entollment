import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import * as dotenv from "dotenv";

//load environment variables
dotenv.config();


export async function accountdrivenfunc
    (request: HttpRequest,
    context: InvocationContext):
    Promise<HttpResponseInit> {
    try {
        context.log(`Http function processed request for url "${request.url}"`);
        const response = {
            Servers: [
                {
                    Version: "mdm-byod",
                    BaseURL: `https://manage.microsoft.com/EnrollmentServer/PostReportDeviceInfoForUEV2?aadTenantId=${process.env.TENANT_ID}`,
                }
            ]
        };
        return {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(response)
        }
    } catch (error) {
        return {
            status: 500,
            body: error.message
        }
    }
};

app.http('accountdrivenfunc', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: '.well-known/com.apple.remotemanagement',
    handler: accountdrivenfunc
});
