export class HttpClient {
    private static getHeaders() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

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
}