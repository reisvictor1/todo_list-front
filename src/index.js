import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const axios = require('axios')

function ListItem(props){

    return <li>{props.task}</li>   

}

class List extends React.Component{

    componentDidMount(){
       axios.get('https://todolistbackend.firebaseio.com/listItem.json')
       .then((res) => {
           console.log(res.data)
           this.setState({items: Object.entries(res.data)});
       })

    }
  
    state = {
        data: '',
        items: [],
        index: 'secret'
    }

    addItem = async (props) => {
      
        if(props.value !== ''){

            axios.post('https://todolistbackend.firebaseio.com/listItem.json',{items: props.value})
            .then((res) => {
                console.log(res.data)
                this.render((this.state.items).map(
                    ([key, todo]) => {
                        return <ListItem key={key} task={todo.items} />
                    }
                ))
            })
            .catch((err) => {
                console.log('Deu uma merdinha. ' + err)
            })

        }else{
            alert('Coloque um item no campo')
        }

        props.value = null;
        console.log(this.state.items)
       
    }

    render(){
        
        let ItemsList = (this.state.items).map(
            ([key, todo]) => {
                return <ListItem key={key} task={todo.items} />
            }
        )

        return(
            <div>
                <ul>{ItemsList}</ul>
                <div className='frm'>
                    <label htmlFor='newItem'>Adicione tarefas abaixo:</label>
                    <input id='newItem' type="text"></input>
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