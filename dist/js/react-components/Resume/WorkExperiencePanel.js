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
import { workExperience } from "../../models/ResumeInfo";
import { ResumeSection } from "./ResumeSection";
import { Row } from "../bootstrap/Row";
var WorkExperiencePanel = /** @class */ (function (_super) {
    __extends(WorkExperiencePanel, _super);
    function WorkExperiencePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkExperiencePanel.prototype.render = function () {
        var _this = this;
        return React.createElement(ResumeSection, { title: 'Work Experience', id: 'workExperience' }, workExperience.map(function (occupation) { return _this.occupationPanel(occupation); }));
    };
    WorkExperiencePanel.prototype.occupationPanel = function (occupation) {
        return React.createElement("div", { key: occupation.company + "-" + occupation.timePeriod.replace(/ /g, '-') },
            React.createElement(Row, null,
                React.createElement("div", { className: 'col-md-4' },
                    React.createElement("h4", null, occupation.company),
                    occupation.timePeriod),
                React.createElement("div", { className: 'col-md-offset-1 col-md-7' },
                    React.createElement("h5", null, occupation.position),
                    occupation.summary,
                    React.createElement("div", { style: { marginTop: '10px' } },
                        "Tasks:",
                        React.createElement("ul", null, occupation.bullets.map(function (bullet) { return React.createElement("li", { key: bullet }, bullet); }))),
                    React.createElement("div", { style: { marginTop: '10px', color: '#22A39F' } },
                        React.createElement("i", { className: 'fa fa-location-arrow' }),
                        "\u00A0 ",
                        occupation.location,
                        "\u00A0  |  \u00A0",
                        React.createElement("a", { href: occupation.website, target: "_blank", style: { color: '#22A39F' } },
                            React.createElement("i", { className: 'fa fa-link' }),
                            "\u00A0",
                            occupation.website)))));
    };
    return WorkExperiencePanel;
}(React.Component));
export { WorkExperiencePanel };
//# sourceMappingURL=WorkExperiencePanel.js.map