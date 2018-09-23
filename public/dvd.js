/**
 * Created by Dwape on 9/21/18.
 */

var x = 0, y = 0,
    vx = 0, vy = 0,
    ax = 0, ay = 0;

var sphere = document.getElementById("dvd");

let counter = 0;
let rotation = 0;

if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = function(e) {
        if (counter === 0) {
            ax = event.accelerationIncludingGravity.x * 5;
            ay = event.accelerationIncludingGravity.y * 5;
            /*
            document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
            document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
            document.getElementById("accelerationZ").innerHTML = e.accelerationIncludingGravity.z;

            if ( e.rotationRate ) {
                document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
                document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
                document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
            }
            */
        } else if (counter === 100000) counter = 0;
        else counter++;
    };

    setInterval( function() {
        var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
        if ( landscapeOrientation) {
            vx = vx + ay;
            vy = vy + ax;
        } else {
            vy = vy - ay;
            vx = vx + ax;
        }
        vx = vx * 0.98;
        vy = vy * 0.98;
        y = parseInt(y + vy / 50);
        x = parseInt(x + vx / 50);

        boundingBoxCheck();

        sphere.style.top = y + "px";
        sphere.style.left = x + "px";

    }, 25);
}


function boundingBoxCheck(){
    if (x<0) {
        x = 0;
        vx = -vx;
        rotation += 110;
        sphere.style.WebkitFilter = "hue-rotate(" + rotation + "deg)";
    }
    if (y<0) {
        y = 0;
        vy = -vy;
        rotation += 110;
        sphere.style.WebkitFilter = "hue-rotate(" + rotation + "deg)";
    }
    if (x>document.documentElement.clientWidth-100) {
        x = document.documentElement.clientWidth-100;
        vx = -vx;
        rotation += 110;
        sphere.style.WebkitFilter = "hue-rotate(" + rotation + "deg)";
    }
    if (y>document.documentElement.clientHeight-50) {
        y = document.documentElement.clientHeight-50;
        vy = -vy;
        rotation += 110;
        sphere.style.WebkitFilter = "hue-rotate(" + rotation + "deg)";
    }

}
