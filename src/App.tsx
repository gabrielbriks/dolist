import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'


function App() {



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
              <span>0</span>
            </div>

            <div className={styles['header-count-tasks-done']}>
              <strong>Concluídas</strong>
              <span>1 de 5</span>
            </div>
          </header>

          <div className={styles['list-tasks']}>

            <Task />

            {/* <div className={styles['message-list-emtpy']}>
              <ClipboardText size={62} weight='thin' />
              <strong> Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seu itens a fazer</p>
            </div> */}

          </div>
        </div>
      </main>
    </div>

  )
}

export default App
