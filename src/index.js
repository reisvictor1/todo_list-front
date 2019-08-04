import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function ListItem(props){

    return <li>{props.task}</li>   

}

class List extends React.Component{

  
    state = {
        items: [],
        index: 'secret'
    }

    addItem = (props) => {

        let listItems;
      
        if(props.value !== ''){

            this.state.items.push(props.value);
    

        }else{
            alert('Coloque um item na lista!!')
        }

        listItems = this.state.items.map(
            (item) => 
            <ListItem key={item + this.state.index} task={item} />
            
        )

        props.value = null;
        console.log(this.state)
        ReactDOM.render(listItems,document.getElementById('list'))
    }

    render(){
        return(
            <div>
                <ul id='list' className='list'>  </ul>

                <div className='frm'>
                    <label htmlFor='newItem'>Adicione tarefas abaixo:</label>
                    <input id='newItem'  type="text"></input>
                    <button onClick={() => this.addItem(document.getElementById('newItem'))} >Adicionar um elemento a lista</button>
                </div>
            </div>
        )
    }

}

class App extends React.Component{


    render(){
        return(
            <main id="app">
                <h3>Lista de coisas a fazer</h3>
                <List />
            </main>
        )
    }
}



//Call class to root

ReactDOM.render(<App />, document.getElementById("root"))