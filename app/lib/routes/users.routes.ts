import { RouteCreator } from "./base.routes";

export class UserRoutes {
    static readonly users = RouteCreator.createRoute("/v1/users");
    static readonly userMe = RouteCreator.createRoute("/v1/users/me");
    static readonly login = RouteCreator.createRoute("/auth/login");
}