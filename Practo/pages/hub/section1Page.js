(function () {
    "use strict";

    var ControlConstructor = WinJS.UI.Pages.define("/pages/hub/section1Page.html", {
        // This function is called after the page control contents 
        // have been loaded, controls have been activated, and 
        // the resulting elements have been parented to the DOM. 
        ready: function (element, options) {
            options = options || {};
            var oldsearchparam;
            $("input#speciality").keyup(function () {
                var value = this.value.trim();
                if (oldsearchparam === value || value === "") {
                    return;
                }
                oldsearchparam = value;
                seach(value);
            });

        },
    });

    function seach(key) {
        $.ajax({
            url: "metrics",
            data: { city_id: 0 },
            success: function (data) { debugger },
            error: function (data) { debugger },
            header: {
                "X-AUTH-TOKEN": window.auth_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    // The following lines expose this control constructor as a global. 
    // This lets you use the control as a declarative control inside the 
    // data-win-control attribute. 

    WinJS.Namespace.define("HubApps_SectionControls", {
        Section1Control: ControlConstructor
    });
})();