var user = require('../user.js');
var skills = require('../skills.js')
module.exports = {
name:((req,res)=>{
    let name = {name: user.name}
    res.status(200).json(name)
}),
location:((req,res)=>{
    let location = {location: user.location}
    res.status(200).json(location)
}),
occupations:((req,res)=>{
    let sorted = user.occupations
    if (req.query.order){
        if (req.query.order ==='desc'){
            sorted = sorted.sort();
        }
        if (req.query.order ==='asc'){
            sorted = sorted.sort().reverse()
        }
    }
    
    let occupations = {occupations: sorted}
    res.status(200).json(occupations)
}),
latest:((req,res)=>{
    let match = {latestOccupation:user.occupations[user.occupations.length-1]}
    res.status(200).json(match)
    // res.status(200).json(user.occupations[user.occupations.length-1])
}),
hobbies:((req,res)=>{
    let hobbies = {hobbies:user.hobbies}
    
    res.status(200).json(hobbies)
}),
hobbyType:((req,res)=>{
    let matches = user.hobbies.filter(e=>{
        if (e.type === req.params.type) return e
    })
    hobbies = {hobbies:matches}
    res.status(200).json(hobbies)
}),
family:((req,res)=>{
    let family = {family:user.family}
    res.status(200).json(family)
}),
famGender:((req,res)=>{
    let matches = user.family.filter(e=>{
        if (e.gender === req.params.gender) return e
    })
    family = {family:matches}
    res.status(200).json(family)
}),
restaurants:((req,res)=>{
    let matches = user.restaurants
    if (req.query.rating){
        matches = matches.filter(e=>{
            if (e.rating >= +req.query.rating) return e
        })
    }
    restaurants = {restaurants:matches}
    res.status(200).json(restaurants)
}),
resName:((req,res)=>{
    let matches = user.restaurants.filter(e=>{
        if (e.name === req.params.name) return e
    })
    res.status(200).json(matches)
}),
changeName:((req,res)=>{
    // user.name = req.body.name
    // let name = {name:user.name}
    // res.status(200).json(name)
    console.log(req.body)
}),
changeLoc:((req,res)=>{
    user.location = req.body.location
    let location = {location: user.location}
    res.status(200).json(location)
}),
addHobbies:((req,res)=>{
    user.hobbies.push(req.body)
    let hobbies = {hobbies: user.hobbies}
    res.status(200).json(hobbies)
}),
addOcc:((req,res)=>{
    user.occupations.push(req.body.newOcc)
    let occupations = {occupations: user.occupations}
    res.status(200).json(occupations)
}),
addFam:((req,res)=>{
    user.family.push(req.body)
    let family = {family: user.family}
    res.status(200).json(family)
}),
addRest:((req,res)=>{
    user.restaurants.push(req.body)
    let restaurants = {restaurants: user.restaurants}
    res.status(200).json(restaurants)
}),
skills:((req,res)=>{
    let matches = skills.skills
    if (req.query.experience){
        matches = matches.filter(e=>{
            if (e.experience === req.query.experience) return e
        })
    }
    res.status(200).json(matches)
}),
addSkill:((req,res)=>{
    let id = 6;
    let newSkill={
        "name":req.body.name,
        "experience":req.body.experience,
        "id":id
    } 
    skills.skills.push(newSkill)
    id++
    res.status(200).json(skills.skills)
}),
}
