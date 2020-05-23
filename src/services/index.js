import axios from 'axios';

export const fetchProject = (errorHandler) => {
    try {
        const user = axios.get('https://zeit.co/api/v2/projects/?limit=8&latestDeployments=3', {
            headers: {
              'Authorization': `Bearer 6P87T3hMJ8kQvHdaN4iGvKwY`
            }
          } )
          return user
    } catch(error){
        errorHandler(error)
    }
}