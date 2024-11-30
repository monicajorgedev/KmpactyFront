import RoutesApp from './routes/RoutesApp'
import UserProvider from "./contexts/UserContext";
import './App.css'



function App() {
 
  return (
    <>
    <UserProvider>
      <RoutesApp />
    </UserProvider>
       
       
   </>
  )
}

export default App
