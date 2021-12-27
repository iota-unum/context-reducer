import { UserContext } from './index'
import { useContext } from 'react';
function App() {
  const value = useContext(UserContext)
  return (
    <div >
      Hello {value}
    </div>
  );
}

export default App;
