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
    currentList: [],
    textInput: '',
    tagText: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onAdd = () => {
    const {textInput, tagText} = this.state
    const id = v4()
    const value = textInput
    const text = tagText
    const bgColor = false

    if (textInput.length !== 0) {
      this.setState(prevState => ({
        currentList: [...prevState.currentList, {id, value, text, bgColor}],
        textInput: '',
        tagText: tagsList[0].optionId,
      }))
    }
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({tagText: event.target.value})
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
    const {tagsText, currentList, textInput, activeTag} = this.state
    const filteredList =
      activeTag === 'INITIAL'
        ? currentList
        : currentList.filter(each => each.text === activeTag)
    return (
      <MainDiv>
        <FirstDiv>
          <FirstDivHead>Create a task!</FirstDivHead>
          <LabelInputDiv>
            <Label htmlFor="label-input">Task</Label>
            <Input
              type="text"
              id="label-input"
              placeholder="Enter the task here"
              onChange={this.onChangeText}
              value={textInput}
            />
          </LabelInputDiv>
          <LabelInputDiv>
            <Label htmlFor="label-options">Tags</Label>
            <Select
              name="tags"
              id="label-options"
              onChange={this.onChangeOption}
              value={tagsText}
            >
              {tagsList.map(eachItem => (
                <option value={eachItem.optionId}>
                  {eachItem.displayText}
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
            {tagsList.map(eachItem => {
              const isActive = activeTag === eachItem.optionId
              return (
                <TagsLi key={eachItem.optionId}>
                  <TagsButton
                    value={eachItem.optionId}
                    type="button"
                    onClick={this.onClickTaskTag}
                    isActive={isActive}
                  >
                    {eachItem.displayText}
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
              {currentList.map(eachItem => (
                <MyTasksItem key={eachItem.id} taskDetails={eachItem} />
              ))}
            </TasksUl>
          )}
        </SecondDiv>
      </MainDiv>
    )
  }
}

export default MyTasks
