const fetchResult =  async ()=>{

    let url = `http://api.weatherapi.com/v1/current.json?key=b28d3f9d7f6d42dfa7f180626242212&q=${}&aqi=no`
    
    const res  = await fetch(url)
    const data = await res.json()

    console.log(data)
    
    
}
fetchResult()