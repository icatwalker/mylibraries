Function.prototype.addFunction = function (name, fn) {// 基于jquery 引用时候放到 jquery 后
    this.prototype[name] = fn;
    return this;//链式添加方法；
};
var Mxjfn = new Function();
Mxjfn
    .addFunction("showItem", function (selector) {//点击 有样式变化， 下拉框 
        $(selector).on("click", function () {
            $(this)
                .toggleClass("active")
                .next().toggle("slow");
        });
        return this;
    })
    .addFunction("key_home", function (selector, key) {//触发的按键，和 按键code 元素中要有onclick
        $("body").bind('keypress', function (event) {
            if (event.keyCode == key) { $(selector).click() }
        });
        return this;
    })
    .addFunction("selectAll", function (faSel,childSel) {// 点击复选框 ， 用的时候复制一份 faSel有唯一标示 ,子元素有统一class 或标示
        function doCheck() {
            var ch = $(childSel);
            if ($(faSel).prop("checked")==true) {
                $.each(ch, function (i, item) {
                    item.checked = true;
                });
            } else {
                $.each(ch, function (i, item) {
                    item.checked = false;
                });
            }
        }
        $(faSel).click(function () {
            doCheck();
        });
        return this;
    })





    .addFunction("", function () {//标准格式， 用的时候复制一份

        return this;
    });

