import { Component } from "react";

export class Contacts extends Component {
  componentDidUpdate (){
    localStorage.setItem("contacts", JSON.stringify(this.props.data))
  } 
  render(){
    const {data, deleteContact} = this.props
  return (
    data.length > 0 && (
      <ul>
        {data.map(({id,name,number}) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" data-id={id} onClick={deleteContact}>
              delete
            </button>
          </li>
        ))}
      </ul>
    )
  )}
}
