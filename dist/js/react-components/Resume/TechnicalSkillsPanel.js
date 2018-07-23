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
import { technicalSkills } from "../../models/ResumeInfo";
import { ResumeSection } from "./ResumeSection";
var TechnicalSkillsPanel = /** @class */ (function (_super) {
    __extends(TechnicalSkillsPanel, _super);
    function TechnicalSkillsPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnicalSkillsPanel.prototype.render = function () {
        var _this = this;
        return React.createElement(ResumeSection, { title: 'Technical Skills', id: 'technicalSkills' },
            React.createElement("ul", null, technicalSkills.map(function (skill) { return _this.technicalSkillItem(skill); })));
    };
    TechnicalSkillsPanel.prototype.technicalSkillItem = function (skill) {
        var stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push(React.createElement("span", { key: skill.skill + "-" + i },
                React.createElement("i", { className: "fa " + (i < skill.rating ? 'fa-star' : 'fa-star-o') }),
                "\u00A0"));
        }
        return React.createElement("li", { key: skill.skill, className: 'col-md-6' },
            skill.skill,
            React.createElement("span", { className: 'pull-right', style: { marginRight: '40px' } }, stars));
    };
    return TechnicalSkillsPanel;
}(React.Component));
export { TechnicalSkillsPanel };
//# sourceMappingURL=TechnicalSkillsPanel.js.map