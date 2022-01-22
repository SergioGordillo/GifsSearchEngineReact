const API_KEY="ZU4UQwNBA4tp5s4h5b3dpaIdUo32jFQ2"



export default function getGifs ({keyword = "The Expanse"} = {}) {

    const API_URL=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(API_URL)
      .then(res => res.json())
      .then (response => {
        const { data = [] } = response;  
        if(Array.isArray(data)){
          console.log(data);
          const gifs = data.map(img=>{
            const {title, id, images} = img; 
            const {url} = images.downsized_medium;
            return  { title, id, url }  
          });
          return gifs;
        }
})}