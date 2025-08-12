/**
 * 
 * @param {*} key 
 * @returns 
 */


export const getFromLocalStorage = (key) => {
    return window.localStorage.getItem(key)
}
/**
 * 
 * @param {*} key 
 * @param {*} value 
 */

export const setLocalStorage = (key,value) => {
    window.localStorage.setItem(key,value)
}


 
