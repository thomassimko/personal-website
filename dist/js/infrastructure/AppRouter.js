var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Route, HashRouter } from "react-router-dom";
import { App } from "../react-components/App";
import { Navigation } from "./Navigation";
import { NotFound } from "../react-components/NotFound";
import { Switch } from "react-router";
import { Projects } from "../react-components/Projects/projects";
var AppRouter = /** @class */ (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AppRouter.prototype, "app", {
        get: function () {
            return React.createElement(App, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRouter.prototype, "notFound", {
        get: function () {
            return React.createElement(NotFound, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRouter.prototype, "projects", {
        get: function () {
            return React.createElement(Projects, null);
        },
        enumerable: true,
        configurable: true
    });
    AppRouter.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement(Navigation, null),
            React.createElement(HashRouter, null,
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: "/", component: function () { return _this.app; } }),
                    React.createElement(Route, { path: "*", component: function () { return _this.notFound; } }))));
    };
    return AppRouter;
}(React.Component));
export { AppRouter };
//# sourceMappingURL=AppRouter.js.map