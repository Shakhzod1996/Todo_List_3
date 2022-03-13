window.addEventListener('load', ()=> {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')

    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        const task = input.value;
        if (!task) {
            alert('Please fill out the task')
            return 
        }


        const taskEl = document.createElement('div')
        taskEl.classList.add('task')

        const taskContentEl = document.createElement('div')
        taskContentEl.classList.add('content')
        // taskContentEl.innerText = task

        taskEl.appendChild(taskContentEl)


        const taskInputEl = document.createElement('input')
        taskInputEl.classList.add('text')
        taskInputEl.type = 'text';
        taskInputEl.value = task;
        taskInputEl.setAttribute('readonly', 'readonly')

        taskContentEl.appendChild(taskInputEl)

        const taskActionsEl = document.createElement('div');
        taskActionsEl.classList.add('actions')

        const taskEditEl = document.createElement('button')
        taskEditEl.classList.add('edit')
        taskEditEl.innerHTML = 'Edit'

        const taskDeleteEl = document.createElement('button')
        taskDeleteEl.classList.add('delete')
        taskDeleteEl.innerHTML = 'Delete'

        taskActionsEl.appendChild(taskEditEl)
        taskActionsEl.appendChild(taskDeleteEl)
        taskEl.appendChild(taskActionsEl)


        list_el.appendChild(taskEl)

        input.value = ''

        taskEditEl.addEventListener('click', ()=> {
        if (taskEditEl.innerHTML.toLowerCase() == 'edit') {
            taskInputEl.removeAttribute('readonly')
            taskInputEl.focus()
            taskEditEl.innerHTML = 'Save'
        } else {
            taskInputEl.setAttribute('readonly', 'readonly');
            taskEditEl.innerHTML = 'Edit'
        }

        })

        taskDeleteEl.addEventListener('click', ()=> {
            taskEl.remove()
        })
    })


})