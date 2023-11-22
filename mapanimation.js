mapboxgl.accessToken = 'Your API Key'

var map = new mapboxgl.Map({
  container:'map',
  style:'mapbox://styles/mapbox/streets-v11',
  center:[-88.2900001, 41.763889],
  zoom:14
});

var marker = new makboxgl.Marker()
  .SetLngLat([-88.3081, 41.7613])
  .addTo(map);

const busStops = [
  [-88.33677772122043, 41.74575377020249],
  [-88.33812918851051, 41.74493832030677],
  [-88.34684756366009, 41.755765155592094],
  [-88.34973889346479, 41.77066041361924],
  [-88.35898568593443, 41.781034027254776],
  [-88.37192173379485, 41.80404758004162]
];

var counter = 0;
function move(){
  setTimeout (() => {
    if (counter >= busStops.length)
    return;
marker.setLngLat(busStops[counter]);
counter++;
move();
}, 1000);
}
