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
import { ScrollLink } from "./ScrollLink";
import Scroll from "react-scroll";
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return React.createElement("nav", { className: "navbar navbar-default navbar-fixed-top", style: { marginBottom: '100px' } },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "navbar-header" },
                    React.createElement("button", { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" })),
                    React.createElement("a", { className: "navbar-brand", href: "/#/", onClick: function () { return Scroll.animateScroll.scrollToTop(); } }, "Thomas Simko")),
                React.createElement("div", { className: "collapse navbar-collapse", id: "myNavbar" },
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", { className: "dropdown" },
                            React.createElement("a", { className: "dropdown-toggle", "data-toggle": "dropdown", href: "/#/" },
                                "Resume",
                                React.createElement("span", { className: "caret" })),
                            React.createElement("ul", { className: "dropdown-menu" },
                                React.createElement("li", null,
                                    React.createElement(ScrollLink, { to: "education", linkName: React.createElement("span", null, "Education") })),
                                React.createElement("li", null,
                                    React.createElement(ScrollLink, { to: "technicalSkills", linkName: React.createElement("span", null, "Technical Skills") })),
                                React.createElement("li", null,
                                    React.createElement(ScrollLink, { to: "workExperience", linkName: React.createElement("span", null, "Work Experience") })),
                                React.createElement("li", null,
                                    React.createElement(ScrollLink, { to: "softwareProjects", linkName: React.createElement("span", null, "Software Projects") })),
                                React.createElement("li", null,
                                    React.createElement(ScrollLink, { to: "achievements", linkName: React.createElement("span", null, "Achievements") }))))),
                    React.createElement("ul", { className: "nav navbar-nav navbar-right" },
                        React.createElement("li", null,
                            React.createElement(ScrollLink, { to: "contactMe", linkName: React.createElement("span", null,
                                    "Contact Me\u00A0\u00A0",
                                    React.createElement("span", { className: "glyphicon glyphicon-arrow-right" })) }))))));
    };
    return Navigation;
}(React.Component));
export { Navigation };
//# sourceMappingURL=Navigation.js.map