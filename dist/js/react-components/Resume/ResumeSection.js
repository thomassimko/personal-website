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
import { Row } from "../bootstrap/Row";
import { Element } from "react-scroll";
var ResumeSection = /** @class */ (function (_super) {
    __extends(ResumeSection, _super);
    function ResumeSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResumeSection.prototype.render = function () {
        return React.createElement(Element, { name: this.props.id },
            React.createElement("div", { id: this.props.id },
                React.createElement("h2", { className: 'text-center' },
                    React.createElement("u", null, this.props.title)),
                React.createElement(Row, null,
                    React.createElement("div", { className: 'col-md-offset-2 col-md-8' }, this.props.children))));
    };
    return ResumeSection;
}(React.Component));
export { ResumeSection };
//# sourceMappingURL=ResumeSection.js.map