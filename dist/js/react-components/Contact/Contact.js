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
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contact.prototype.render = function () {
        return React.createElement("div", { id: "contactMe", style: { textAlign: 'center', marginBottom: '40px' } },
            React.createElement("hr", null),
            React.createElement("h2", null,
                React.createElement("u", null, "Contact Me:")),
            React.createElement("h3", null, "Thomas Simko"),
            React.createElement("h4", null,
                React.createElement("a", { href: "mailto:tjsimko@gmail.com", target: "_top" }, "tjsimko@gmail.com")),
            React.createElement("br", null),
            React.createElement("h5", null, "See other sources with my information:"),
            React.createElement(Row, null,
                React.createElement("div", { className: "col-md-offset-4 col-md-2", style: { alignContent: 'center' } },
                    React.createElement("div", { className: 'media-photo' },
                        React.createElement("img", { src: require('../../../images/github.png') }),
                        React.createElement("a", { href: 'https://github.com/thomassimko?tab=repositories' },
                            React.createElement("div", { className: "overlay" },
                                React.createElement("div", { style: { paddingTop: '15px' } },
                                    React.createElement("h4", null, "Visit my GitHub")))))),
                React.createElement("div", { className: "col-md-2", style: { alignContent: 'center' } },
                    React.createElement("div", { className: 'media-photo' },
                        React.createElement("img", { src: require('../../../images/linkedin.png') }),
                        React.createElement("a", { className: 'media-photo', href: 'https://www.linkedin.com/in/thomas-simko-0b2491b6/' },
                            React.createElement("div", { className: "overlay" },
                                React.createElement("div", { style: { paddingTop: '15px' } },
                                    React.createElement("h4", null, "Visit my LinkedIn Profile"))))))));
    };
    return Contact;
}(React.Component));
export { Contact };
//# sourceMappingURL=Contact.js.map