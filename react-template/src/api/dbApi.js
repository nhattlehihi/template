import axios from 'axios';
import axiosClient from './axiosClient';

export const categoryType = {
    popular: 'popular',
    sold: 'sold',
}

const dbApi = {
    // getCategoryList: (type, params) => {
    //     const url = 'category/' + categoryType[type];
    //     return axiosClient.get(url, params);
    // },

    getItems: (cate, id) => {
        const url = category[cate] + '/' + id + '/items';
        return axiosClient.get(url, {params:{}});
    },

    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },

    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    }
}
export default dbApi;