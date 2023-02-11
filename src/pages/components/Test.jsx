import Sidebar from "./Sidebar";
import Screen from "./Screen";
import QuizTimer from "./QuizTimer";

function Test() {
          return ( <div className="flex justify-center items-center">
                       <div>
            
            <Screen></Screen>
          </div>
            <Sidebar element={ <QuizTimer msg={ "Times's Up" }></QuizTimer>}></Sidebar>
          </div> );
}

export default Test;