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
import { Link } from "react-scroll";
var ScrollLink = /** @class */ (function (_super) {
    __extends(ScrollLink, _super);
    function ScrollLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollLink.prototype.render = function () {
        return React.createElement(Link, { activeClass: "active", to: this.props.to, spy: true, smooth: true, duration: 500, offset: -70 }, this.props.linkName);
    };
    return ScrollLink;
}(React.Component));
export { ScrollLink };
//# sourceMappingURL=ScrollLink.js.map