export const nsls =(key, delay=500)=> {
    let sLast = localStorage.getItem(key);
    if (sLast === null || Date.now() - parseInt(sLast, 10) > delay * 1.5) {
        keepAlive(key, delay);
        return true;
    } else {
        return false;
    }
};
const keepAlive=(key,delay)=>setInterval(()=>{
    localStorage.setItem(key, `${Date.now()}`);
},delay);