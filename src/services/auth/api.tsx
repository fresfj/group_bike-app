import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { create } from 'apisauce';

const api = create({
    baseURL: "api-dev.ds3i.com.br",
    timeout: 1000,
    headers: { Accept: 'application/vnd.github.v3+json' }
})

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default api;