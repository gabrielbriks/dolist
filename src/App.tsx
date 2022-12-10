import { ClipboardText } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import styles from './App.module.css'
import { Header } from './components/Header'
import { ITask, Task } from './components/Task'


function App() {

  const [listTasks, setListTasks] = useState([] as ITask[]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  const [newDescriptionTask, setNewDescriptionTask] = useState('');


  useEffect(() => {
    let countTasks = listTasks.length
    let countTasksCompleted = listTasks.filter(f => f.completed).length;

    setTotalTasks(countTasks);
    setTotalTasksCompleted(countTasksCompleted);


  }, [listTasks]);




  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    let newTask = {
      id: uuid(),
      description: newDescriptionTask,
      completed: false,
    } as ITask;

    setListTasks([...listTasks, newTask]);
    setNewDescriptionTask('');

  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewDescriptionTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Insira a descrição da tarefa.');
  }


  function handleChangeCompleteTask(idTask: string) {
    let listTasksUpdated: ITask[] = listTasks.map((task) => {

      if (task.id === idTask)
        task.completed = !task.completed;

      return task;

    });

    let listTasksUpdatedSortedByCompleted = listTasksUpdated.sort((a, b) => (a.completed > b.completed) ? 1 : -1);
    setListTasks(listTasksUpdatedSortedByCompleted);
  }

  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles['area-form']}>
          <div>
            <input
              placeholder='Adicione uma nova tarefa'
              value={newDescriptionTask}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button type='submit'>Criar</button>
          </div>



        </form>

        <div className={styles['area-list-tasks']}>
          <header className={styles['header-list-tasks']}>
            <div className={styles['header-count-tasks-created']}>
              <strong>Tarefas criadas</strong>
              <span>{totalTasks}</span>
            </div>

            <div className={styles['header-count-tasks-done']}>
              <strong>Concluídas</strong>
              <span>{totalTasksCompleted} de {totalTasks}</span>
            </div>
          </header>

          <div className={styles['list-tasks']}>

            {
              listTasks.length > 0 ?
                listTasks.map(task => {
                  return (
                    <Task
                      key={task.id}
                      id={task.id}
                      description={task.description}
                      completed={task.completed}
                      onChangeCompleteTask={handleChangeCompleteTask}
                    />
                  )
                })
                :
                <div className={styles['message-list-emtpy']}>
                  <ClipboardText size={62} weight='thin' />
                  <strong> Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seu itens a fazer</p>
                </div>
            }



          </div>
        </div>
      </main>
    </div>

  )
}

export default App
