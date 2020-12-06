import { Component } from 'react';
import Counters from './Components/Counters'
import Navbar from './Components/navbar'

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 5},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 0}
    ]
 }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;
    this.setState({counters})
}
handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value --;
  this.setState({counters})
}
handleReset= ()=>{
  const counters =  this.state.counters.map(c=> {
        c.value = 0;
        return c;
    });
 this.setState({counters});
}
handleDelete = counterID => {
  const counters = this.state.counters.filter(c => c.id !== counterID);
  this.setState({counters})
}
render() {
  return (
    <div className="App">
      <main className="container">
        <Navbar totalCounters={this.state.counters.filter(c=>c.value > 0).length} />
        <Counters 
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset ={this.handleReset}
        />
      </main>
    </div>
  );
}
}

export default App;
