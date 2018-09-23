/**
 * Created by Dwape on 9/21/18.
 */
let sensor = new Magnetometer();
sensor.start();

sensor.onreading = () => {
    document.getElementById("magneticX").innerHTML = sensor.x;
    document.getElementById("magneticY").innerHTML = sensor.y;
    document.getElementById("magneticZ").innerHTML = sensor.z;
    //console.log("Magnetic field along the X-axis " + sensor.x);
    //console.log("Magnetic field along the Y-axis " + sensor.y);
    //console.log("Magnetic field along the Z-axis " + sensor.z);
};

sensor.onerror = event => console.log(event.error.name, event.error.message);