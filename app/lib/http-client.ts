export class HttpClient {
    private static getHeaders(token: string | undefined = undefined) {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        }
    }
    public static async postRequest(url: string, body: object): Promise<object> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: HttpClient.getHeaders(),

                body: JSON.stringify(body)

            });

            const data = await response.json();
            return data;
        } catch (error) {
            return {}
        }
    }

    public static async getRequest(url: string, authToken: string | undefined) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: HttpClient.getHeaders(authToken),

            });

            const data = await response.json();
            return data;
        } catch (error) {
            return {}
        }
    }

}