require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61dcdd353dc00e7278198e88').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('61c11139ed571acbc08e441d').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})