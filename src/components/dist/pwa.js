"use strict";
/*eslint prefer-const: "off"*/
/*eslint  @typescript-eslint/no-non-null-assertion: "off"*/
exports.__esModule = true;
var virtual_pwa_register_1 = require("virtual:pwa-register");
window.addEventListener('load', function () {
    var pwaToast = document.querySelector('#pwa-toast');
    var pwaToastMessage = pwaToast.querySelector('.message #toast-message');
    var pwaCloseBtn = pwaToast.querySelector('#pwa-close');
    var pwaRefreshBtn = pwaToast.querySelector('#pwa-refresh');
    var refreshSW;
    var refreshCallback = function () { return refreshSW === null || refreshSW === void 0 ? void 0 : refreshSW(true); };
    var hidePwaToast = function (raf) {
        if (raf === void 0) { raf = false; }
        if (raf) {
            requestAnimationFrame(function () { return hidePwaToast(false); });
            return;
        }
        if (pwaToast.classList.contains('refresh'))
            pwaRefreshBtn.removeEventListener('click', refreshCallback);
        pwaToast.classList.remove('show', 'refresh');
    };
    var showPwaToast = function (offline) {
        if (!offline)
            pwaRefreshBtn.addEventListener('click', refreshCallback);
        requestAnimationFrame(function () {
            hidePwaToast(false);
            if (!offline)
                pwaToast.classList.add('refresh');
            pwaToast.classList.add('show');
        });
    };
    pwaCloseBtn.addEventListener('click', function () { return hidePwaToast(true); });
    refreshSW = virtual_pwa_register_1.registerSW({
        immediate: true,
        onOfflineReady: function () {
            pwaToastMessage.innerHTML = 'App ready to work offline';
            showPwaToast(true);
        },
        onNeedRefresh: function () {
            pwaToastMessage.innerHTML = 'New content available, click on reload button to update';
            showPwaToast(false);
        },
        onRegisteredSW: function (swScriptUrl) {
            console.log('SW registered: ', swScriptUrl);
        }
    });
});
