

const direction =  async (start , newMarker , apiKey) => {
    const url = "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + start.lat + "&lo1=" + start.lon + "&la2=" + newMarker.lat + "&lo2=" + newMarker.lng + "&apiKey="+apiKey
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (err) {
        return err;
      }
}

const matrix = async (gmarker, apiKey) => {

  let startpoint = []
    for (let i = 0; i < gmarker.length; i++){
      let en = gmarker[i].lat +"/"+ gmarker[i].lng;
      startpoint.push(en)
    }
  
    const url = "https://mapapi.gebeta.app/api/v1/route/driving/matrix/?start=" + startpoint + "&apiKey="+apiKey

  try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (err) {
        return err;
      }
}



const tss = async (gmarker, apiKey) => {
  let startpoint = []
    for (let i = 0; i < gmarker.length; i++){
      let en = gmarker[i].lat +"/"+ gmarker[i].lng;
      startpoint.push(en)
    }

  const url = "https://mapapi.gebeta.app/api/v1/route/driving/tss/?start=" + startpoint + "&apiKey=" + apiKey   
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (err) {
        return err;
      }
}

const oneToMany = async (start, endpoints, apiKey) => {
  let _endpoints = []
  for (let i = 0; i < endpoints.length; i++){
      let en = endpoints[i].lat +"/"+ endpoints[i].lng;
      _endpoints.push(en)
  }
  const url = "https://mapapi.gebeta.app/api/v1/route/driving/onm/?la1=" + start.lat + "&lo1=" + start.lon + "&json=" + _endpoints + "&apiKey=" + apiKey
  try {
        const response = await fetch(url);
        const json = await response.json();
    return json
  } catch (error) {
    return err;
  }
}

const geocoding = async (name, apiKey) => {
  const url = "https://mapapi.gebeta.app/api/v1/route/geocoding?name=" + name + "&apiKey=" + apiKey;
  try {
      const response = await fetch(url);
        const json = await response.json();
  } catch (error) {
    return error
  }

}


module.exports = { direction: direction,  matrix: matrix,  oneToMany: oneToMany,  tss: tss,  geocoding: geocoding }

