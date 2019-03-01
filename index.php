<?php
require_once './inc/config.php';
global $zcl;
?>
<html lang="zh_CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/fonts/css/all.min.css">
    <title><?php echo $zcl['site_title'] ?></title>
</head>
<body>
<header>
    <div class="container text-center font-weight-bold">欢迎来到张成林的自留地 <i class="fab fa-qq"></i>469946668</div>
</header>
<main>
    <div id="pay" class="container">
        <div id="payType" class="text-center">
            <p>
                <a href="javascript:;" id="alipay" class="btn btn-info btn-sm"><i class="fab fa-2x fa-alipay"></i>点击这里使用支付宝付款</a>
            </p>
            <p>
                <a href="javascript:;" id="wechat" class="btn btn-success btn-sm"><i class="fab fa-2x fa-weixin"></i>点击这里使用微信付款</a>
            </p>
        </div>
    </div>

    <div class="container">
        <div id="toast_test"></div>
        <div class="text-center">
            <a id="toast_test_btn" class="btn btn-sm btn-dark" href="javascript:;">显示提示</a>
        </div>
    </div>
</main>
<footer>
    <div id="siteVersion" class="fixed-bottom text-center text-danger">当前呈现版本：v<?php echo $zcl['version'] ?></div>
</footer>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/zcl.js"></script>
</body>
</html>
