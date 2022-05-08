// 当前模块：API统一管理

import request from './request';






export const reqCategoryList = () => {
    return request({
        url:'/product/getBaseCategoryList',
        method:'get',

    })
}