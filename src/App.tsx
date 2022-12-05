import { ClipboardText } from 'phosphor-react'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import styles from './App.module.css'
import { Header } from './components/Header'
import { ITask, Task } from './components/Task'



const listTasksRepos: ITask[] = [
  {
    id: uuid(),
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: uuid(),
    description: 'TESTE DOIS urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: uuid(),
    description: 'TESTE TRES urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: uuid(),
    description: 'TESTE COMPLETE urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true
  },
]

function App() {

  const [listTasks, setListTasks] = useState([] as ITask[]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  useEffect(() => {
    let countTasks = listTasks.length
    let countTasksCompleted = listTasks.filter(f => f.completed).length;

    setTotalTasks(countTasks);
    setTotalTasksCompleted(countTasksCompleted);
    setListTasks(listTasksRepos);


  }, [listTasks]);

  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.wrapper}>
        <div className={styles['area-create']}>
          <input placeholder='Adicione uma nova tarefa' />
          <button>Criar</button>

        </div>

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
                    <Task id={task.id} description={task.description} completed={task.completed} />
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
