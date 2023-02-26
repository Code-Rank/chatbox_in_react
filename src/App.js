import logo from './logo.svg';
import Topbar from './components/Topbar.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js';
import './App.css';

function App() {
  return (
    <>


<div className="container"  style={{marginTop:"10%"}}>

<table className="table">
        <tr>
          <td>
            
            <Sidebar /></td>
          <td><Topbar />
            <Main /></td>
        </tr>
      </table>
</div>
     

    </>
  );
}

export default App;
