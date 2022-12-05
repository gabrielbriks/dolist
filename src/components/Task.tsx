import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

export interface ITask {
  id: string;
  description: string;
  completed: boolean;
  onChangeCompleteTask: (id: string) => void;
}

export function Task({ id, description, completed, onChangeCompleteTask }: ITask) {

  const [taskCompleted, setTaskCompleted] = useState(completed);

  function handleCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskCompleted(event.target.checked);
    onChangeCompleteTask(event.target.id)
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

