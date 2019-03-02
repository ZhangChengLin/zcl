(function () {
    let alipay = document.querySelector("#alipay");
    let weixin = document.querySelector("#wechat");
    if (alipay) {
        alipay.addEventListener("click", alipay_fun);
    }
    if (weixin) {
        weixin.addEventListener("click", weixin_fun);
    }

    function alipay_fun() {

    }

    function weixin_fun() {

    }
})();

function toast(title, body, time, delay, messageType) {
    let toast = document.createElement("div");
    let toast_header = document.createElement("div");
    let toast_header_strong = document.createElement("strong");
    let toast_header_small = document.createElement("small");
    let toast_header_button = document.createElement("button");
    let toast_header_span = document.createElement("span");
    let toast_body = document.createElement("div");
    let toast_test = document.querySelector("#toast_test");
    let toastID = "toast_" + new Date().getTime();
    toast.className = "toast";
    toast.id = toastID;
    toast.setAttribute("data-animation", "true");
    toast.setAttribute("data-autohide", "true");
    delay = delay ? delay : 10e3;
    toast.setAttribute("data-delay", delay);
    switch (messageType) {
        case 0:
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            break;
        case 1:
        default:
            toast.setAttribute("role", "alert");
            toast.setAttribute("aria-live", "assertive");
    }

    toast.setAttribute("aria-atomic", "true");
    toast_header.className = "toast_header";
    toast_header_strong.className = "mr-auto";
    toast_header_small.className = "text-muted";
    toast_header_button.className = "ml-2 mb-1 close";
    toast_header_button.setAttribute("data-dismiss", "toast");
    toast_header_button.setAttribute("aria-label", "Close");
    toast_header_span.setAttribute("aria-hidden", "true");
    toast_header_span.innerHTML = "&times;";
    toast_header_strong.innerHTML = title ? title : "空白的标题";
    toast_header_small.innerHTML = time ? time : "";
    toast_header_button.appendChild(toast_header_span);
    toast_header.appendChild(toast_header_strong);
    toast_header.appendChild(toast_header_small);

    toast_header.appendChild(toast_header_button);
    toast_body.className = "toast-body";

    toast_body.innerHTML = body ? body : "空白的内容";
    toast.appendChild(toast_header);
    toast.appendChild(toast_body);
    toast_test.appendChild(toast);
    $("#" + toastID).toast("show");
    dispose_toast(toastID, delay);
}

function dispose_toast(id, delay) {
    let toast = document.querySelector("#" + id);
    setTimeout(function () {
        toast.parentElement.removeChild(toast);
    }, delay + 2000)
}

(function () {
    let toast_test = document.querySelector("#toast_test");
    let toast_test_btn = document.querySelector("#toast_test_btn");
    if (toast_test && toast_test_btn) {
        toast_test_btn.addEventListener("click", function () {
            let time = new Date();
            time = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
            toast("这是标题", "这是内容。", time);
        })
    } else {
        alert("出错");
    }
})();
