async function getData() {

    const datas = await fetch("./q4.json")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    
    return filteredJson(datas)
}

function filteredJson(datas) {

    // Find items in the Meeting Room.
    const meetingRoomItems = datas.filter(data => {
        return data.placement.name === "Meeting Room"
    })
    for (let i = 0; i < meetingRoomItems.length; i++) {
        console.log(`${meetingRoomItems[i].name} is in the Meeting Room`)
    }
    console.log(" ")


    // Find all electronic devices.
    const electronics = datas.filter(data => {
        return data.type === "electronic"
    })
    for (let i = 0; i < electronics.length; i++) {
        console.log(`${electronics[i].name} is electronic devices`) 
    }
    console.log(" ")


    // Find all the furniture
    const furnitures = datas.filter(data => {
        return data.type === "furniture"
    })
    for (let i = 0; i < furnitures.length; i++) {
        console.log(`${furnitures[i].name} is furnitures`) 
    }
    console.log(" ")

}

getData()