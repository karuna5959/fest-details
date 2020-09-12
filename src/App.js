import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/details');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
       <table>
        {groups.map(group =>
              <div key={group.labelName}>
               <td className = "left1">
               {group.labelName}
               </td>
               <table><tr className="left2">
               {group.bands.map(band =>
                {
                  return <div key= {band.bandName}>
                    <tr >{band.bandName}</tr>
                    {band.musicFestivals.map(fest =>{
                     return <div key ="fest"> 
                    <ul><li>{fest}</li></ul> 
                     </div>
                   })}
                  </div>
                })}
                </tr>
                </table>
               
              </div>
            )}
        </table>
      </div>
    );
  }
}

export default App;
