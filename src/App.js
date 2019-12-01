import React from 'react';
import './App.css';
import ContainerComponent from './components/structure/container/container.component';

const App = ({ children }) => <div className="App"> 
  <ContainerComponent view={children} />
</div>
export default App;
