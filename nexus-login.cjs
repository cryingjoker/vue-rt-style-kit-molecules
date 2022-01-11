#!/usr/bin/env node

const childProcess = require('child_process')

const username = 'npm-upload'
const password = 'ccHfrC4YtgJfXG'
const email = 'npm-upload@south.rt.ru'

if (!username) {
  console.error('Please set the NPM_USER environment variable')
  process.exit(1)
}

if (!password) {
  console.error('Please set the NPM_PASS environment variable')
  process.exit(1)
}

if (!email) {
  console.error('Please set the NPM_EMAIL environment variable')
  process.exit(1)
}

const child = childProcess.spawn('npm', ['adduser', '--registry=http://nexus.south.rt.ru:8081/repository/npm-local/', '--always-auth'], {
  stdio: ['pipe', 'pipe', 'inherit']
})

child.stdout.on('data', d => {
  const data = d.toString()
  process.stdout.write(d + '\n')
  if (data.match(/username/i)) {
    child.stdin.write(username + '\n')
  } else if (data.match(/password/i)) {
    child.stdin.write(password + '\n')
  } else if (data.match(/email/i)) {
    child.stdin.write(email + '\n')
  } else if (data.match(/logged in as/i)) {
    child.stdin.end()
  }
})
