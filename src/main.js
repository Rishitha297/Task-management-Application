import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Task Manager</h1>

    <div class="input-section">
      <input type="text" id="taskInput" placeholder="Enter a task">
      <button id="addBtn">Add Task</button>
    </div>

    <ul id="taskList"></ul>
  </div>
`

const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

async function loadTasks() {
  const response = await fetch('http://localhost:5000/tasks')
  const tasks = await response.json()

  taskList.innerHTML = ''

  tasks.forEach(task => {
    const li = document.createElement('li')

    li.innerHTML = `
      ${task.title}
      <button class="delete-btn">Delete</button>
    `

    li.querySelector('.delete-btn').addEventListener('click', async () => {
      await fetch(`http://localhost:5000/tasks/${task._id}`, {
        method: 'DELETE'
      })

      loadTasks()
    })

    taskList.appendChild(li)
  })
}

addBtn.addEventListener('click', async () => {
  const title = taskInput.value.trim()

  if (!title) return

  await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })

  taskInput.value = ''

  loadTasks()
})

loadTasks() 