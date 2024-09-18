import React, { Suspense, useState } from 'react' 
import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RXJSExample from './Components/RXJSExamples/RXJSExample'
import Dashboard from './Dashboard'
import SuspenseComponent from './Components/LazzyModules/SuspenseComponent'
import UseMemoExample from './Components/Hooks-UseMemo/UseMemoExample'
import UseCallbackComponent1 from './Components/Hooks-UseCallback/UseCallbackComponent1'
import UsestateComponent from './Components/Hooks-UseState/UsestateComponent'
import UserContextMain from './Components/Hook-UseContext/UserContextMain'
import UseReffComponent from './Components/Hook-UseRef/UseReffComponent'
import UseReducerSigle from './Components/Hook-UseRducer/UseReducerSigle'
import UserReducerAppContextMain from './Components/Hook-UseRducer/UserReducerAppContextMain'

function App() {
 const LazzyComponentPage = React.lazy(()=>import('./Components//LazzyModules/LazzyComponent'));

  return (
    <>   
    <Router>
      
      <Routes>
        <Route path='' element={<Dashboard></Dashboard>}></Route>
        <Route path='/rxjs' element={<RXJSExample></RXJSExample>}></Route>
        <Route path='/usememo' element={<UseMemoExample/>}> </Route>
        <Route path='/useCallback' element={<UseCallbackComponent1/>}> </Route>
        <Route path='/useState' element={<UsestateComponent/>}> </Route>
        <Route path='/useContext' element={<UserContextMain></UserContextMain>}></Route>
        <Route path="/useRef" element={<UseReffComponent/>}></Route>
        <Route path='useReducerSingle' element={<UseReducerSigle></UseReducerSigle>}></Route>
        <Route path='useReducerContext' element={<UserReducerAppContextMain></UserReducerAppContextMain>}></Route>
        <Route path='/lazzy' element={
          <Suspense fallback={<SuspenseComponent/>}>
            <LazzyComponentPage/>
          </Suspense>}>
        </Route>
      </Routes>
    </Router>     
    </>
  )
}

export default App
