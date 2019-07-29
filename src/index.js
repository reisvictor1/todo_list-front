import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class List extends React.Component{


 
    state = {
        items: []
    }


    addItem = (props) => {

       let newItem = document.getElementById('newItem');
       let listItem = null;

       if(newItem.value !== ""){

            this.state.items.push(props.value)
            console.log(this.state.items)

            listItem = this.state.items.map(

                (item) =>  <li>{item}</li>
        
            )

        }else{
            alert('Coloque um item na lista!')
        }


        newItem.value = null;
        ReactDOM.render(listItem,document.getElementById('list'))
    }

    render(){
        return(
            <div>
                <ul id='list' className='list'>  </ul>

               
                <label htmlFor='newItem'>Adicione tarefas abaixo:</label>
                <input id='newItem'  type="text"></input>
                <button onClick={() => this.addItem(document.getElementById('newItem'))} >Adicionar um elemento a lista</button>
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