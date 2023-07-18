import {Component} from 'react'
import {v4} from 'uuid'
import MyTasksItem from '../MyTasksItem'
import {
  MainDiv,
  FirstDiv,
  FirstDivHead,
  Label,
  Input,
  LabelInputDiv,
  Select,
  AddTaskButton,
  ButtonDiv,
  SecondDiv,
  SecondDivHead,
  TagsUl,
  TagsLi,
  TagsButton,
  SecondTaskHead,
  TasksUl,
  SecondTaskHead1,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskList: [],
    input: '',
    tag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onAdd = () => {
    const {input, tag} = this.state
    const id = v4()
    const name = input
    const category = tag

    if (name.length !== 0) {
      this.setState(prevState => ({
        taskList: [...prevState.taskList, {id, name, category}],
        input: '',
        tag: tagsList[0].optionId,
      }))
    }
  }

  onChangeText = event => {
    this.setState({input: event.target.value})
  }

  onChangeOption = event => {
    this.setState({tag: event.target.value})
  }

  onClickTaskTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  renderNoTasks = () => (
    <SecondDiv>
      <SecondTaskHead1>No Tasks Added Yet</SecondTaskHead1>
    </SecondDiv>
  )

  render() {
    const {tag, taskList, input, activeTag} = this.state
    const filteredList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.category === activeTag)
    return (
      <MainDiv>
        <FirstDiv>
          <FirstDivHead>Create a task!</FirstDivHead>
          <LabelInputDiv>
            <Label htmlFor="label-input">Task</Label>
            <Input
              id="label-input"
              type="text"
              placeholder="Enter the task here"
              value={input}
              onChange={this.onChangeText}
            />
          </LabelInputDiv>
          <LabelInputDiv>
            <Label htmlFor="label-options">Tags</Label>
            <Select
              id="label-options"
              value={tag}
              onChange={this.onChangeOption}
            >
              {tagsList.map(eachTag => (
                <option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </option>
              ))}
            </Select>
          </LabelInputDiv>
          <ButtonDiv>
            <AddTaskButton type="button" onClick={this.onAdd}>
              Add Task
            </AddTaskButton>
          </ButtonDiv>
        </FirstDiv>
        <SecondDiv>
          <SecondDivHead>Tags</SecondDivHead>
          <TagsUl>
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId
              return (
                <TagsLi key={eachTag.optionId}>
                  <TagsButton
                    type="button"
                    value={eachTag.optionId}
                    onClick={this.onClickTaskTag}
                    isActive={isActive}
                  >
                    {eachTag.displayText}
                  </TagsButton>
                </TagsLi>
              )
            })}
          </TagsUl>
          <SecondTaskHead>Tasks</SecondTaskHead>
          {filteredList.length === 0 ? (
            this.renderNoTasks()
          ) : (
            <TasksUl>
              {filteredList.map(eachTask => (
                <MyTasksItem key={eachTask.optionId} taskDetails={eachTask} />
              ))}
            </TasksUl>
          )}
        </SecondDiv>
      </MainDiv>
    )
  }
}

export default MyTasks
