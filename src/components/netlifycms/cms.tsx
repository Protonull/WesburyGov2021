import React, { Component } from "react";
import CMS from "netlify-cms-app";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

class Test extends Component {

    render() {
        return (<button>Testing</button>);
    }

}

class TestRender extends Component {

    render() {
        return (<span>Testing</span>);
    }

}

CMS.registerWidget("test", Test, TestRender);
