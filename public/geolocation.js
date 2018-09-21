/**
 * Created by Dwape on 9/20/18.
 */
// Get the location.
function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Get the positioning coordinates.
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        alert(lat);
        alert(lon);
    });
}