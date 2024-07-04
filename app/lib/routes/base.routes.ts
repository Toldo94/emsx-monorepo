export class RouteCreator {
    public static createRoute(path: string): string {
        return `${process.env.API_URL}${path}`;
    }
}