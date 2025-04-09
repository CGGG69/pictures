import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=HOd63SyYyWSA0MQG7K3w_bwztivfp1HxjS-MoIOKg2w'

    const response = await axios.get(url, {
        params:{
            query: 'cars'
        }
    })
    console.log(response)
    return response.data.results

}

export default searchImages