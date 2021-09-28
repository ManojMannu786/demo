console.log('this is line 1')
console.log('this is line 2')
const preMovie = async ()=>{
    const promiseWifeBringTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`le tickets`),2000)
    })
    const getPoporn = new Promise((resolve,reject)=>resolve(`le popcorn`));
    const addButter = new Promise((resolve,reject)=> resolve(`le butter`))
    let ticket = await promiseWifeBringTickets;
    console.log(`${ticket}`);
    let popcorn = await getPoporn;
    console.log(`${popcorn}`)
    let butter = await addButter;
    console.log(`${butter}`)
    return ticket;
}
preMovie().then((m)=>console.log(`here is your ${m}`))
console.log('this is line 18')
console.log('this is line 19')