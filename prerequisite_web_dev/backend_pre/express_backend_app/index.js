const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const app = express()
const port = 8000

// DUMMY USERS
const users = []

// Middelware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // check if user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ error: "User already exists" })
  }

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'error hashing password' })
    }
    // store user in dummy storage

    users.push({
      username,
      email,
      password: hashedPassword
    })

    return res.status(500).json({ message: 'User Signed Up Successfully' })

  })
})
app.post('/login', (req, res) => {

  const { email, password } = req.body;

  // Find User by email

  const user = users.find(user => user.email === email)

  if (!user) {
    return res.status(404).json({ error: "Users Not Found" })
  }
  // compare password

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "error comparing password" })
    }
    if (result) {
      return res.status(200).json({ message: "user signed successfully" })
    }
    else {
      return res.status(401).json({ message: "Invalid email or password" })
    }
  })

})
app.get('/questions', (req, res) => {
  res.send('Hello World!')
})
app.get('/submissions', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})