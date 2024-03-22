(function()
{
    //method that runs when the sw is installed for the first time
    self.addEventListener('install', event=>{
        console.log('service worker is installing');
        //loading tatic html into cache first

        event.waitUntil(
            caches
            .open('PWD_app')
            .then(cache=>
                cache.addAll([
                    '/git'
                ]))
        )
        self.skipWaiting();
    })

    //method that runs when the sw is activated
    self.addEventListener('activate',event=>{
        event.waitUntil(caches.delete('PWD_app'));
        console.log("service worker is activating");
    })

    //method that will run when the app makes fetch calls
    self.addEventListener('fetch',event=>{
        console.log('fetching...',event.request.url);
        event.respondWith(
            //checking if the response is already available on cache
            caches.match(event.request).then(async(response)=>
            {
                if(response){
                    //found response in cache
                    return response
                }

                //loading the fetch response into the cache
                let data = fetch(event.request);
                let data_clone = (await data).clone();
                event.waitUntil(caches.open('PWD_app').then(cache.put(event.request,data_clone)));
                return data
            })
        )
    })
})