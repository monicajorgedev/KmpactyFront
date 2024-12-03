import RoutesApp from './routes/RoutesApp'
import UserProvider from "./contexts/UserContext";
import LoadingProvider from "./contexts/LoadingContext";
import './App.css'



function App() {
 
  return (
    <>
    <UserProvider>
      <LoadingProvider>
        <RoutesApp />
      </LoadingProvider>
    </UserProvider>
       
       
   </>
  )
}

export default App
