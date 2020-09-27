import {instance,instance1} from "../public";

/**
 * 传递数据
 * @param url   地址
 * @param data   数据
 * @returns {AxiosPromise}
 */
export function home(url,data) {
    return instance({
        url:url,
        method:'post',
        changeOrigin:true,
        params: data,
    })
}
export function home2(url,data) {
    return instance1({
        url:url,
        method:'post',
        params: data,
    })
}