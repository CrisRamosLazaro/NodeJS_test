const bcrypt = require('bcryptjs')

const users = [
    {
        _id: '1',
        username: 'nosoyhacker',
        password: bcrypt.hashSync('1234', 10)
    }
]

module.exports = { users }
