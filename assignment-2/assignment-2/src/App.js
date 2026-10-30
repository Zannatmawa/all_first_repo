import './App.css';
import Conditional_rendering from './CONDITIONAL_RENDERING/Conditional_rendering';
import Counter from './COUNTER_APP/Counter';
import CounterClass from './COUNTER_APP/CounterClass';
import DynamicStyle from './DYNAMIC_STYLING/DynamicStyle';
import EventPropagation from './EVENT_PROPAGETION/EventPropagation';
import ControlledForm from './FORM/ControlledForm';
import ControlledForm1 from './FORM/ControlledForm1';
import DataFetch from './JSON_SERVER/DataFetch';
import ReactRouter from './REACT_ROUTER_DOM/ReactRouter';
import Parent from './STATE_LIFTING/Parent';
import Toggle from './TOGGLE/Toggle';
import UseEffect from './USE_EFFECT_HOOK/UseEffect';
import UseState from './USE_STATE_HOOK/UseState';
// import dataFetch from './CUSTOM_HOOK/DataFetch';




function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <CounterClass /> */}
      {/* <Conditional_rendering /> */}
      {/* <UseState /> */}
      {/* <EventPropagation /> */}
      {/* <Toggle /> */}
      {/* <UseEffect /> */}
      {/* <dataFetch /> */}
      {/* <DynamicStyle /> */}
      {/* <ReactRouter /> */}
      <ControlledForm1 />
      <br />
      <Parent />

      <DataFetch />

    </div>
  );
}

export default App;
