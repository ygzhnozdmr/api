
import axios from "axios";

const searchImages = async (term) => {
const response = await axios.get('https://api.unsplash.com/search/photos',{ 
headers:{
    Authorization:'Client-ID VRAQ7JsnYeMcb3ZnT2vTbHPS-6_zbbNSJLQP-pC4sPg',
},
params: {
    query: term,
},
});
return response.data.results;
}

export default searchImages;
