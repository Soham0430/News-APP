import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navigationbar from './Components/Navigationbar'
import News from './Components/News';
import { v4 as uuidv4 } from "uuid";

import { router } from "./config/config";
import Search from './Components/Search';
import UserContextProvider from './Context/UserContextProvider';
function App() {
  return (
     <>
         <UserContextProvider>   

      <Router>
        <Navigationbar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
              }
            />
          ))}
          <Route  path='/Search'  element={ <Search/>}/>
        </Routes>
      </Router>

      </UserContextProvider>   
    </>
  )
}

export default App
