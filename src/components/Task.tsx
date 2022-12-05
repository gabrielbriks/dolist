import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

export interface ITask {
  id: string;
  description: string;
  completed: boolean;
}

export function Task({ id, description, completed }: ITask) {

  const [taskCompleted, setTaskCompleted] = useState(completed);

  function handleCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskCompleted(event.target.checked);

  }

  return (
    <div className={styles.task} key={id}>
      <span>
        <input type="checkbox" name="taskCompleted" id={id} checked={taskCompleted} onChange={handleCompletedTask} />
      </span>
      <p className={taskCompleted ? styles['risk-text'] : undefined}>
        {description}
      </p>
    </div >
  )
}

