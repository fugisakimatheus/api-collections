import { Divider } from "./components/Divider";
import { RequestConfig } from "./components/RequestConfig";
import { Requests } from "./components/Requests";
import { Response } from "./components/Response";

function App() {
  return (
    <div className="flex flex-row">
      <Requests />
      <Divider />
      <RequestConfig />
      <Divider />
      <Response />
    </div>
  );
}

export default App;
