import { RouteCreator } from "./base.routes";

export class UserRoutes {
    static readonly users = RouteCreator.createRoute("/v1/users");
    static readonly login = RouteCreator.createRoute("/auth/login");
}