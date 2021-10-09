import logo from './logo.svg';
import './App.css';
import Adress from './components/profile/Adress';
import FullName from './components/profile/FullName';
import ProfilePhoto from './components/profile/ProfilePhoto';

function App() {
    return (
        <div className="App">
            <FullName/>
            <br/>
            <ProfilePhoto/>
            <br/>
            <Adress/>
        </div>
    );
}

export default App;
