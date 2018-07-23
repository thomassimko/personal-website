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
import { EducationPanel } from "./EducationPanel";
import { TechnicalSkillsPanel } from "./TechnicalSkillsPanel";
import { WorkExperiencePanel } from "./WorkExperiencePanel";
import { SoftwareProjectsPanel } from "./SoftwareProjectsPanel";
import { ResumeSection } from "./ResumeSection";
import { eduAchievements } from "../../models/ResumeInfo";
var Resume = /** @class */ (function (_super) {
    __extends(Resume, _super);
    function Resume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Resume.prototype.render = function () {
        return React.createElement("div", { id: 'resume' },
            React.createElement(EducationPanel, null),
            React.createElement(TechnicalSkillsPanel, null),
            React.createElement(WorkExperiencePanel, null),
            React.createElement(SoftwareProjectsPanel, null),
            React.createElement(ResumeSection, { title: 'Achievements', id: 'achievements' },
                React.createElement("ul", null, eduAchievements.map(function (achievement) { return React.createElement("li", { key: achievement }, achievement); }))));
    };
    return Resume;
}(React.Component));
export { Resume };
//# sourceMappingURL=ResumeRoot.js.map