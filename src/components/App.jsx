import { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./Container/Container";
import { CustomTitle } from "./CustomTitle/CustomTitle";
import { MyForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";


export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
filter: ''
  }
  
handlerSubmit = (values , actions) => {
  const newContact = { ...values, id: nanoid() }; 
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact] 
  })) 
  actions.resetForm()
}

updateFilteredValue=(e)=>{
this.setState({filter:e.target.value}) 
}

findContacts =(value)=>this.state.contacts.filter(({name})=> name.startsWith(value))



  render (){
  const filteredArray = this.findContacts(this.state.filter)
  return (<Container>
    <CustomTitle text={"PhoneBook"}/>
    <MyForm updateContact={this.handlerSubmit}/>
    <CustomTitle text={"Contacts"}/>
    <Filter value={this.state.filter} handlerInput={this.updateFilteredValue}/>
   <Contacts data={filteredArray}/>
    </Container>
  );
}}
