async function getData() {

    const datas = await fetch("./q3.json")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    
    return filteredJson(datas)
}

function filteredJson(datas) {

    
}