import { useQuery, useQueries } from 'react-query';
import axios from 'axios';

const fetchCountries = async () => {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');
    return data;
};
export const useCountries = () => useQuery('posts', fetchCountries);

const fetchRegion = async (region) => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return data;
};
export const useRegion = (region) => useQuery(['posts', region], () => fetchRegion(region), { enabled: !!region });

const fetchCountrie = (border) => {
    return axios.get(`https://restcountries.com/v3.1/alpha/${border}`);

};

export const useCountrie = (borders) => useQueries(borders.map(border => {
    return {
        queryKey: ['posts', border],
        queryFn: () => fetchCountrie(border),
    }
}), { enabled: !!borders });
