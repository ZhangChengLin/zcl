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

function toast(title, body, time) {
    let toast = document.createElement("div");
    let toast_header = document.createElement("div");
    let toast_header_strong = document.createElement("strong");
    let toast_header_small = document.createElement("small");
    let toast_header_button = document.createElement("button");
    let toast_header_span = document.createElement("span");
    let toast_body = document.createElement("div");
    let toast_test = document.querySelector("#toast_test");
    toast.className = "toast show";
    toast_header.className = "toast_header";
    toast_header_strong.className = "mr-auto";
    toast_header_small.className = "text-muted";
    toast_header_button.className = "ml-2 mb-1 close";
    toast_header_span.ariaHidden = "true";
    toast_header_span.innerText = "&times;";
    toast_header_strong.innerText = title ? title : "空白的标题";
    toast_header_small.innerText = time ? time : "";
    toast_header_button.appendChild(toast_header_span);
    toast_header.appendChild(toast_header_strong);
    toast_header.appendChild(toast_header_small);

    toast_header.appendChild(toast_header_button);
    toast_body.className = "toast-body";

    toast_body.innerText = body ? body : "空白的内容";
    toast.appendChild(toast_header);
    toast.appendChild(toast_body);
    toast_test.appendChild(toast);
    $(".toast").toast({
        "animation": true,
        "autohide": true,
        "delay": 500,
    });
}

(function () {
    let toast_test = document.querySelector("#toast_test");
    let toast_test_btn = document.querySelector("#toast_test_btn");
    if (toast_test && toast_test_btn) {
        toast_test_btn.addEventListener("click", function () {
            let time = new Date();
            toast("这是标题", "这是内容。", time);
        })
    } else {
        alert("出错");
    }
})();
