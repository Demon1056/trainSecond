import { Component } from "react";
import { MyForm } from "./Form/Form";

export class App extends Component  {
  state = {
    contacts: [],
    name: ''
  }
  render (){
  
  return (<MyForm/>
  );
};}
