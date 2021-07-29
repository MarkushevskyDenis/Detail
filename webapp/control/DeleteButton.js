sap.ui.define([
    "sap/m/Button"
], function (Button) {
    "use strict";
    return Button.extend("project1.control.DeleteButton", {
        metadata: {
            dnd: { droppable: true },
            properties:{enabled: false}
        },
        renderer: {}
    });
});