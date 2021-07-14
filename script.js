if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(registration=>{
        console.log("service worker Registerd");
        console.log(registration);
    }).catch(err=>{
        console.log("service worker Registeration error");
        console.log(err);
    })
}else{
    alert("service worker not working")
}