import {instance} from "../public";

/**
 * 申请数据
 * @param url  申请地址
 * @returns {AxiosPromise} 返回一个
 */
export function home1(url) {
    return instance({
        url:url,
        method:'get',
        changeOrigin:true,
    })
}