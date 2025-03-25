export const getMapData = (req, res) => {
    const { id } = req.params;
  
    const mapData = {
      1: { name: "Delhi", latitude: 28.6139, longitude: 77.2090, zoom: 5 },      // Delhi
      2: { name: "Mumbai", latitude: 19.0760, longitude: 72.8777, zoom: 5 },     // Mumbai
      3: { name: "Chennai", latitude: 13.0827, longitude: 80.2707, zoom: 5 },    // Chennai
      4: { name: "Kolkata", latitude: 22.5726, longitude: 88.3639, zoom: 5 },    // Kolkata
      5: { name: "Bangalore", latitude: 12.9716, longitude: 77.5946, zoom: 5 },  // Bangalore
      6: { name: "Hyderabad", latitude: 17.3850, longitude: 78.4867, zoom: 5 },  // Hyderabad
      7: { name: "Ahmedabad", latitude: 23.0225, longitude: 72.5714, zoom: 5 },  // Ahmedabad
      8: { name: "Pune", latitude: 18.5204, longitude: 73.8567, zoom: 5 },        // Pune
      9: { name: "Jaipur", latitude: 26.9124, longitude: 75.7873, zoom: 5 },     // Jaipur
      10: { name: "Lucknow", latitude: 26.8467, longitude: 80.9462, zoom: 5 }    // Lucknow
    };
  
    if (mapData[id]) {
      res.status(200).json(mapData[id]);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  };
  