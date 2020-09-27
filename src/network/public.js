import axios from 'axios'
export function instance(config) {
    const instance=axios.create({
        baseURL:'http://localhost:8088',
        timeout:5000,
        withCredentials:true,
        headers:{'Content-Type':"application/x-www-form-urlencoded"}
    })
    return instance(config)
}
export function instance1(config) {
    const instance=axios.create({
        baseURL:'http://localhost:8088',
        timeout:5000,
    })
    return instance(config)
}