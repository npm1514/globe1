var map = new Datamap({
  scope: 'world',
  element: document.getElementById('container1'),
  projection: 'orthographic',
  height: 600,
  fills: {
    defaultFill: 'green'
  },
  projectionConfig: {
    rotation: [97,-50]
  },
  geographyConfig: {
    hideAntarctica: false,
    borderWidth: 0.5
  },
  arcConfig: {
    strokeColor: 'blue',
    strokeWidth: 0.5,
    arcSharpness: 1
  }
});

//creates global grid
map.graticule();

//creates arcs
map.arc([{
  //russians
  origin: {
    latitude: 60.639722,
    longitude: 43.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  //russians
  origin: {
    latitude: 55.639722,
    longitude: 43.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  //russians
  origin: {
    latitude: 58.639722,
    longitude: 48.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  //geordyn
  origin: {
    latitude: 42.194444,
    longitude: -86.67
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  //nick
  origin: {
    latitude: 42.639722,
    longitude: -78.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  origin: {
    latitude: 35.639722,
    longitude: -80.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  origin: {
    latitude: 37.639722,
    longitude: -78.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  origin: {
    latitude: 39.639722,
    longitude: -113.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}, {
  origin: {
    latitude: 39.639722,
    longitude: -105.778889
  },
  destination: {
    latitude: 40.226100,
    longitude: -111.660546
  }
}], {
  strokeWidth: 1,
  animate: true,
  animationSpeed: 10000
});
