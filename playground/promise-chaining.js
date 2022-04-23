require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('61c10f9f3876f05cb7ff5e30', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61c10f9f3876f05cb7ff5e30', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})