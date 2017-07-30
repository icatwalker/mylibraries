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
    .addFunction("rd_color", function (min_color,max_color,o) {//随即颜色
        var r=Math.floor(Math.random()*(max_color-min_color)+min_color);
        var g=Math.floor(Math.random()*(max_color-min_color)+min_color);
        var b=Math.floor(Math.random()*(max_color-min_color)+min_color);
        if(arguments.length==2){
            return "rgba("+r+","+g+","+b+","+1+")";
        }
        if(arguments.length==3){
            return "rgba("+r+","+g+","+b+","+o+")";
        }
        return this;
    })
    .addFunction("create_div", function (n) {//添加div  class=
        var crdiv=`<div class="rd" style="width:200px;height:200px ;background: #f00 ;margin-top:10px ;margin-left:10px;display: inline-block"></div>`;
       var crdivs="";
        if(arguments.length==0){
            crdivs=crdiv;
        }else{
           for(var i=1;i<=n;i++){
               crdivs+=crdiv;
            }
        }

        $("#ccc").append(crdivs);
        return this;
    })



    .addFunction("", function () {//标准格式， 用的时候复制一份

        return this;
    });

