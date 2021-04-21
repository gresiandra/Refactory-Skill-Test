async function getData() {

    const datas = await fetch("./q3.json")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    
    return filteredJson(datas)
}

function filteredJson(datas) {

        // Find users who don't have any phone numbers
        const noPhone = datas.filter(data => data.profile.phones.length === 0)
        for (let i = 0; i < noPhone.length; i++) {
            console.log(`${noPhone[i].profile.full_name} has no phone number`)  
        }
        console.log(" ")

        
        //Find users who don't have any articles
        const noArticles = datas.filter(data => data.articles.length === 0)
        for (let i = 0; i < noArticles.length; i++) {
            console.log(`${noArticles[i].profile.full_name} has no articles`)  
        }
        console.log(" ")


        //Find users who have "annis" on their name
        const Annis = datas.filter(data => data.profile.full_name.includes('Annis'))
        for (let i = 0; i < Annis.length; i++) {
            console.log(`${Annis[i].profile.full_name} has "Annis" in it`)  
        }
        console.log(" ")


        //Find users who have articles on the year 2020
        const recentArticles = datas.filter(data => {
            for (let i = 0; i < data.articles.length; i++) {
                const hasAtricles = data.articles[i].published_at.substring(0,4)
                return hasAtricles === ('2020')
            }
        })
        
        if (recentArticles.length > 0) {
            for (let i = 0; i < recentArticles.length; i++) {
                console.log(`${recentArticles[i].profile.full_name} has articles in 2019`)  
            }
        } else {
            console.log("No users has articles on the year 2020")
        }
        console.log(" ")


        // Find users who are born in 1986.
        const birthday = datas.filter(data => data.profile.birthday.substring(0,4) === '1986')
        for (let i = 0; i < birthday.length; i++) {
            console.log(`${birthday[i].profile.full_name} has born in 1986`)  
        }
        console.log(" ")


        // Find articles that contain "tips" on the title.
        for (let i = 0; i < datas.length; i++) {
            const tipsAtricles = datas[i].articles.filter(articleData => {
                return articleData.title.includes('Tips')
            })

            for (let J = 0; J < tipsAtricles.length; J++) {
                console.log(`articles that has "Tips" in it => id:${tipsAtricles[0].id}, title:${tipsAtricles[0].title}`);    
            }
        }
}   

getData()