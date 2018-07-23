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
import { eduInstitutions } from "../../models/ResumeInfo";
import { Row } from "../bootstrap/Row";
import { ResumeSection } from "./ResumeSection";
var EducationPanel = /** @class */ (function (_super) {
    __extends(EducationPanel, _super);
    function EducationPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EducationPanel.prototype.render = function () {
        var _this = this;
        return React.createElement(ResumeSection, { title: 'Education', id: 'education' },
            React.createElement("div", { className: 'row' }, eduInstitutions.map(function (institution) { return _this.educationArea(institution); })));
    };
    EducationPanel.prototype.educationArea = function (institution) {
        return React.createElement("div", { key: institution.name, style: { paddingLeft: '15px', paddingRight: '15px' } },
            React.createElement("h4", null,
                institution.name,
                ", ",
                institution.city,
                ", ",
                institution.state),
            React.createElement("div", { style: { marginLeft: '20px' } },
                institution.major ? React.createElement("b", null, institution.major) : null,
                React.createElement("div", null,
                    React.createElement("b", null,
                        institution.startDate,
                        " - ",
                        institution.endDate)),
                React.createElement("div", null,
                    React.createElement("b", null, "GPA: "),
                    institution.gpa),
                institution.courses
                    ? React.createElement("div", null,
                        React.createElement("b", null, "Relevant Courses:"),
                        React.createElement(Row, null,
                            React.createElement("ul", null, institution.courses.map(function (course) {
                                return React.createElement("li", { className: 'col-md-6', key: institution.name + "-" + course, style: { paddingLeft: '10px' } }, course);
                            }))))
                    : null));
    };
    return EducationPanel;
}(React.Component));
export { EducationPanel };
//# sourceMappingURL=EducationPanel.js.map