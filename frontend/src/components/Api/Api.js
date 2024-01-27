import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'XCSRF-TOKEN';

const Api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const getObjects = async (endPoint) => {
    const response = await Api.get(`/${endPoint}/`);
    return response.data;
};

export const getObjectsByPageNumber = async (pageNumber, id) => {
    const response = await Api.get(`/ads/?category=${id}&page=${pageNumber}`);
    return response.data;
};

export const getObject = async (endPoint, id) => {
    const response = await Api.get(`/${endPoint}/${id}/`);
    return response.data;
};
export const addObject = async (endPoint, modelObject) => {
    return await Api.post(`/${endPoint}/`, modelObject);
};

export const updateObject = async (endPoint, modelObject, id) => {
    return await Api.put(`/${endPoint}/${id}/`, modelObject);
};

export const deleteObject = async (endPoint, { id }) => {
    return await Api.delete(`/${endPoint}/${id}/`, id);
};
export const searchObject = async (endPoint, params) => {
    return await Api.get(
        `/${endPoint}/?product__category=${params.category}&address=${params.address}&search=${params.searchField}`,
        params
    );
};

export default Api;
