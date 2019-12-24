window.addEventListener('load',()=>{
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js').then(registerar=>{
            console.log('Service worker registered')
            console.log(registerar);
            
        })
    } else console.error('you browser doesn\'t support service workers')
})