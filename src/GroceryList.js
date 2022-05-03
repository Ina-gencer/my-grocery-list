import check from './bag_shopping.png';
import { Component } from 'react';

export class GroceryList extends Component{
        state = {
           userInput: "",
            groceryList: []
        }
  

    // получаем доступ к тому,что пишет пользователь:
    onChangeEvent(e){
      this.setState({userInput: e})
    }

    addItem(input){
        if (input === "") {
            alert('Please, enter an item')
        }
        else {
            let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        }
        
    }
    crossedWord(event) {
        const li = event.target
        li.classList.toggle('crossed')
    }
    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
    FormSubmit(e){
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.FormSubmit}>
            <div className='container'>
                <input type="text" placeholder='What do you want to buy today'
                onChange={ (e) => (this.onChangeEvent(e.target.value)) }
                value={ this.state.userInput }/>
            </div>
            <div className='container'>
                <button onClick={ () => this.addItem(this.state.userInput) } className="add btn">Add</button>
            </div>
            <ul>
                { this.state.groceryList.map((item, index) => (
                    <li onClick={ this.crossedWord } key={ index }>
                        <img src={ check } alt="shopping bag" width="40px" />
                        { item }</li>
                )
                )}
             
            </ul>
            <div className='container'>
            <button onClick = { () => this.deleteItem() }  className="delete btn">Delete</button>
            </div>
            </form>
            </div>
        )

    }
}