import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Main} from "./pages/main";
import {City} from "./pages/city";

function App() {
  return (
		<div className={'app'}>
			<Routes>
				<Route path={'/'} element={<Main />}  />
				<Route path={'/city/:name'} element={<City />} />
			</Routes>
		</div>

  );
}

export default App;
