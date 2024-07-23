const promiseOne = new Promise( function(resolve, reject){
    //do an async call
    //DB call
    setTimeout(function(){
        console.log('Async task is completed')//if this function is run then resolve function is call
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


const promiseTwo = new Promise( function(resolve, reject){
    setTimeout(function() {
        console.log('Async task 2 is completed');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise( function(resolve, reject){
        setTimeout(function(){
            resolve({username:"Chai", email:"chai@example.com"})
        }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Chai", email:"chai@example.com"})
            }else{
                reject("Error")
                }
    }, 1000)
})

PromiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))



const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JS", email:"chai@example.com"})
            }else{
                reject('ERROR: JS went wrong')
                }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const respose =await PromiseFive
        console.log(respose);

    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

