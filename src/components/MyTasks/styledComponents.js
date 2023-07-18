import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  background-color: #000000;
  height: 100vh;
`
export const FirstDiv = styled.form`
  width: 40vw;
  background-color: #131213;
`
export const FirstDivHead = styled.h1`
  color: #f3aa4e;
  text-align: center;
`
export const Label = styled.label`
  color: #ffffff;
  margin-bottom: 10px;
`
export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`
export const Input = styled.input`
  height: 33px;
`
export const Select = styled.select`
  height: 33px;
  outline: none;
  padding-left: 10px;
`
export const ButtonDiv = styled.div`
  text-align: center;
`
export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
`
export const SecondDiv = styled.div`
  width: 60vw;
`
export const SecondDivHead = styled.h1`
  color: #ffffff;
  margin-left: 60px;
  margin-top: 50px;
`
export const TagsUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
`
export const TagsLi = styled.li`
  margin-right: 10px;
`
export const TagsButton = styled.button`
  border-radius: 12px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')}
  font-size: 12px;
  color: #ffffff;
  border-width: 1px;
  border-color: #f3aa4e;
  height: 25px;
  outline: none;
  cursor: pointer;
`
export const SecondTaskHead = styled.h1`
  color: #ffffff;
  margin-left: 60px;
`
export const SecondTaskHead1 = styled.p`
  margin-top: 200px;
  color: #ffffff;
  text-align: center;
  margin-left: 300px;
`
export const TasksUl = styled.ul``
