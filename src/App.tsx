import { Footer } from "./Footer";
import { Home } from "./pages/Home";

function App() {
  /*
layout
  hero: References & Reference Boards. All in one place. Anytime, Anywhere.
  sign up button
  screenshot
  features:
    images
    - image tagging 
    - image editing
    - image search 
    collections
    - collections nesting
    - collection tagging
    - collection search
    board
    - board editing
    - board integration with collections
    - board taggin
    - board search
  planned features
    - private/public collection & images
    - collection link sharing & collaboration 
    - real time board collaboration
    - explore page
*/

  return (
    <div className="w-full h-full bg-neutral-900  text-amber-50 ">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
