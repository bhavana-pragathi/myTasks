import {
  TasksLi,
  TaskName,
  TaskButtonDiv,
  TaskDiv,
  TaskPara,
} from './styledComponents'

const MyTasksItem = props => {
  const {taskDetails} = props
  const {name, category} = taskDetails
  return (
    <TasksLi>
      <TaskDiv>
        <TaskName>{name}</TaskName>
        <TaskButtonDiv>
          <TaskPara>{category}</TaskPara>
        </TaskButtonDiv>
      </TaskDiv>
    </TasksLi>
  )
}

export default MyTasksItem
