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
import { Resume } from "./Resume/ResumeRoot";
import { Contact } from "./Contact/Contact";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", { id: "intro-photo" },
                React.createElement("div", { style: { marginTop: '200px' } },
                    React.createElement("div", { style: { fontSize: '10vw' } },
                        "Thomas Simko",
                        React.createElement("hr", null)),
                    React.createElement("div", { style: { fontSize: '5vw' } }, "Software Engineer"))),
            React.createElement("div", { style: { paddingLeft: '10px', paddingRight: '10px' } },
                React.createElement(Resume, null),
                React.createElement(Contact, null)));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=App.js.map