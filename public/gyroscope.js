/**
 * Created by Dwape on 9/23/18.
 */

var x = 0, y = 0,
    vx = 0, vy = 0,
    ax = 0, ay = 0;

let counter = 0;

if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = function(e) {
        if (counter === 0) {
            ax = event.accelerationIncludingGravity.x * 5;
            ay = event.accelerationIncludingGravity.y * 5;

            if ( e.rotationRate ) {
                document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
                document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
                document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
            }
        } else if (counter === 10) counter = -1;
        counter++;
    }


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

    }, 25);
}