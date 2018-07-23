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
import { softwareProjects } from "../../models/ResumeInfo";
import { ResumeSection } from "./ResumeSection";
var SoftwareProjectsPanel = /** @class */ (function (_super) {
    __extends(SoftwareProjectsPanel, _super);
    function SoftwareProjectsPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareProjectsPanel.prototype.render = function () {
        var _this = this;
        return React.createElement(ResumeSection, { title: 'Major Software Projects', id: 'softwareProjects' }, softwareProjects.map(function (project) { return _this.projectPanel(project); }));
    };
    SoftwareProjectsPanel.prototype.projectPanel = function (project) {
        return React.createElement("div", { key: project.name, className: 'row' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h4", null, project.name),
                project.time),
            React.createElement("div", { className: 'col-md-offset-1 col-md-7' },
                React.createElement("h5", null, project.tools.join(', ')),
                project.summary));
    };
    return SoftwareProjectsPanel;
}(React.Component));
export { SoftwareProjectsPanel };
//# sourceMappingURL=SoftwareProjectsPanel.js.map