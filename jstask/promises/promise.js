//promises//

function getData(question) {
    let myPromise = new Promise((resolve, reject) => {
        if (question == "how are you ?") {
            setTimeout(() => {
                resolve(
                    {
                        message: "question is resolved",
                        message2: "answer is : i am fine"
                    }
                )
            }, [2000])
        } else {
            setTimeout(() => {
                reject(
                    {
                        message: "question is not valid this promise is rejected !"
                    }
                )
            }, [5000])
        }
    })
    return myPromise
}

//then, catch and finally//

// getData("question").then((resolve) => {
//     console.log("promise is resolved : ")
//     console.log(resolve)
// }).catch((reject) => {
//     console.log("promise is rejected : ")
//     console.log(reject)
// }).finally(() => {
//     console.log("promise completed !")
// })


// async & await //

let handlePromise = async (question) => {
    try {
        let result = await getData(question)
        console.log(result)
    } catch (err) {
        console.log('promise has been rejected ')
        console.error(err)
    }
}
handlePromise("how are you ?")
handlePromise("what you like ?")
handlePromise("you fill better ?")

