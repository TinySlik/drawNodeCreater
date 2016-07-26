cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        text: "Tiny's drawNode Debug Demmo !",
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.draw = new cc.DrawNode();
        cc.Canvas.instance.node.parent._sgNode.addChild(this.draw);
        this.draw.drawDot(new cc.Vec2(80 , 80),5,new cc.Color(0,255,0,150));
        
        var winSize = cc.director.getVisibleSize()
        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
        
        //drawSegment --- 绘制直线
        //用法：draw.drawSegment(from, to, lineWidth, color)
        //参数
        // from:起始点
        // to:终点
        // lineWidth：线条宽度
        // color：线条颜色
        this.draw.drawSegment(cc.p(0, 0), cc.p(winSize.width, winSize.height), 1, cc.color(255, 0, 255, 255));
        this.draw.drawSegment(cc.p(0, winSize.height), cc.p(winSize.width, 0), 5, cc.color(255, 0, 0, 255));
         
        //drawDot --- 绘制圆点
        //draw.drawDot(pos, radius, color)
        //draw.drawDots(points, radius, color)     //画点  points  点数组
        this.draw.drawDot(cc.p(winSize.width / 2, winSize.height / 2), 40, cc.color(0, 0, 255, 128));
        var points = [cc.p(60, 60), cc.p(70, 70), cc.p(60, 70), cc.p(70, 60)];
        this.draw.drawDots(points, 4, cc.color(0, 255, 255, 255));
 
        //drawCircle  --- 绘制圆形
        //draw.drawCircle(center, radius, angle, segments, drawLineToCenter, lineWidth, color)
        this.draw.drawCircle(cc.p(winSize.width / 2, winSize.height / 2), 100, 0, 10, false, 7, cc.color(0, 255, 0, 255));
        this.draw.drawCircle(cc.p(winSize.width / 2, winSize.height / 2), 50, cc.degreesToRadians(90), 100, true, 2, cc.color(0, 255, 255, 255));
         
        //draw poly --- 绘制多边形
        //draw.drawPoly(verts, fillColor, lineWidth, color)
        //not fill
        var vertices = [cc.p(0, 0), cc.p(50, 50), cc.p(100, 50), cc.p(100, 100), cc.p(50, 100) ];
        this.draw.drawPoly(vertices, null, 5, cc.color(255, 255, 0, 255));
        var vertices2 = [cc.p(30, 130), cc.p(30, 230), cc.p(50, 200)];
        this.draw.drawPoly(vertices2, null, 2, cc.color(255, 0, 255, 255));
        //fill
        var vertices3 = [cc.p(60, 130), cc.p(60, 230), cc.p(80, 200)];
        this.draw.drawPoly(vertices3, cc.color(0, 255, 255, 50), 2, cc.color(255, 0, 255, 255));
         
        //draw rect --- 绘制矩形
        //draw.drawRect(origin, destination, fillColor, lineWidth, lineColor)
        //not fill
        this.draw.drawRect(cc.p(120, 120), cc.p(200, 200), null, 2, cc.color(255, 0, 255, 255));
        //fill
        this.draw.drawRect(cc.p(120, 220), cc.p(200, 300), cc.color(0, 255, 255, 180), 2, cc.color(128, 128, 0, 255));
         
        // draw quad bezier path --- 绘制二次贝塞尔曲线
        // draw.drawQuadBezier(origin, control, destination, segments, lineWidth, color)
        this.draw.drawQuadBezier(cc.p(0, winSize.height), cc.p(centerPos.x, centerPos.y), cc.p(winSize.width, winSize.height), 50, 2, cc.color(255, 0, 255, 255));
         
        // draw cubic bezier path --- 绘制三次贝塞尔曲线
        // draw.drawCubicBezier(origin, control1, control2, destination, segments, lineWidth, color)
        this.draw.drawCubicBezier(cc.p(winSize.width / 2, winSize.height / 2), cc.p(winSize.width / 2 + 30, winSize.height / 2 + 50),
        cc.p(winSize.width / 2 + 60, winSize.height / 2 - 50), cc.p(winSize.width, winSize.height / 2), 100, 2, cc.color(255, 0, 255, 255));
         
         //测试目前还没有适配好.
        // draw cardinal spline --- 绘制曲线
        // drawNode.drawCardinalSpline(config, tension, segments, lineWidth, color)
        // var vertices4 = [
        //     cc.p(centerPos.x - 130, centerPos.y - 130),
        //     cc.p(centerPos.x - 130, centerPos.y + 130),
        //     cc.p(centerPos.x + 130, centerPos.y + 130),
        //     cc.p(centerPos.x + 130, centerPos.y - 130),
        //     cc.p(centerPos.x - 130, centerPos.y - 130)
        // ];
        // this.draw.drawCardinalSpline(vertices4, 0.5, 100, 2, cc.color(255, 255, 255, 255));
    },

    // called every frame
    update: function (dt) {

    },
});
