import { Provider } from "react-redux";
import store from "./redux/stores/store";
import StackNavigations from "./StackNavigations";


const App=()=>{
return(
<Provider store={store}>
   <StackNavigations/>
</Provider>
)}
export default App;
