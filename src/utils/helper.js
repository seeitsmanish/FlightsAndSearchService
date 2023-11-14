const axios = require('axios');

function compareTime(timeString1, timeString2) {
    
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    return dateTime1.getTime() > dateTime2.getTime();
}



async function getAirDistanceBetweenCities(city1, city2) {
  try {
    // Fetch coordinates for City 1
    const response1 = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city1)}, India`);
    const coords1 = {
      lat: parseFloat(response1.data[0].lat),
      lon: parseFloat(response1.data[0].lon),
    };

    // Fetch coordinates for City 2
    const response2 = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city2)}, India`);
    const coords2 = {
      lat: parseFloat(response2.data[0].lat),
      lon: parseFloat(response2.data[0].lon),
    };

    // Calculate air distance using Haversine formula
    const airDistance = haversineDistance(coords1, coords2);

    return airDistance;
  } catch (error) {
    console.error('Error fetching distance:', error.message);
  }
}

function haversineDistance(coords1, coords2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(coords2.lat - coords1.lat);
  const dLon = deg2rad(coords2.lon - coords1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coords1.lat)) * Math.cos(deg2rad(coords2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

module.exports = {
    compareTime,
    getAirDistanceBetweenCities
}