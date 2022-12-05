import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

interface TaskProps {

}

export function Task() {

  const [taskCompleted, setTaskCompleted] = useState(false);

  function handleCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskCompleted(event.target.checked);

  }

  return (
    <div className={styles.task}>
      <span>
        <input type="checkbox" name="taskCompleted" id="" onChange={handleCompletedTask} />
        {/* {taskCompleted && <CheckCircle className={styles['task-complete-icon']} size={26} weight="fill" color="#5e60ce" />} */}
      </span>
      <p className={taskCompleted ? styles['risk-text'] : undefined}> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
    </div >
  )
}

