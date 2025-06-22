const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [-82.36, 27.87], // Riverview, FL
  zoom: 3
});

map.on('load', function () {
  fetch('https://sakitam.github.io/wind-layer/data/wind.json') // Sample wind data
    .then(response => response.json())
    .then(windData => {
      const windLayer = new WindLayer('wind', {
        windOptions: {
          colorScale: [
            "rgb(36,104, 180)",
            "rgb(60,157, 194)",
            "rgb(128,205,193)",
            "rgb(151,218,168)",
            "rgb(198,231,181)",
            "rgb(238,247,217)",
            "rgb(255,238,159)",
            "rgb(252,217,125)",
            "rgb(255,182,100)",
            "rgb(252,150,75)",
            "rgb(250,112,52)",
            "rgb(245,64,32)",
            "rgb(237,45,28)",
            "rgb(220,24,32)",
            "rgb(180,0,35)"
          ],
          velocityScale: 0.01,
          paths: 1000,
          frameRate: 15,
          maxAge: 60,
          globalAlpha: 0.9,
          lineWidth: 1
        },
        map,
        windData
      });

      map.addLayer(windLayer);
    });
});