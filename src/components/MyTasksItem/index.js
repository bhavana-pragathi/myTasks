import {TasksLi, TaskName, TaskButton, TaskDiv} from './styledComponents'

const MyTasksItem = props => {
  const {taskDetails} = props
  const {value, text} = taskDetails
  return (
    <TasksLi>
      <TaskDiv>
        <TaskName>{value}</TaskName>
        <TaskButton>{text}</TaskButton>
      </TaskDiv>
    </TasksLi>
  )
}

export default MyTasksItem
