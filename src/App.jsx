import './App.css'
import { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import DropDown from './components/DropDown';
import Tutorials from './components/Tutorials/Tutorials';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Results from './components/Results/Results';
import Compare from './components/Compare/Compare';
import { FormDataProvider } from './components/FormDataContext';


function App() {

  const [activeTab, setActiveTab] = useState("Project Details");
  const [showTutorials, setShowTutorials] = useState(true);

  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <FormDataProvider>
      <div className="min-h-screen">

        <header
          className="text-md font-semibold flex items-center justify-center h-9 text-white"
          style={{ backgroundColor: '#45913E' }}
        >
          LCCA Web App
        </header>

        <DropDown />

        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} showTutorials={showTutorials} setShowTutorials={setShowTutorials} />


        <div className={` ${showTutorials ? "grid grid-cols-[auto_1fr] " : " "}"
  } gap-24  px-8 mt-4`}>
          {showTutorials && (
            <Tutorials onClose={() => setShowTutorials(false)} showTutorials={showTutorials} />
          )}

          {activeTab === "Project Details" && <ProjectDetails />}
          {activeTab === "Results" && <Results />}
          {activeTab === "Compare" && <Compare />}

        </div>

      </div>
    </FormDataProvider>

  )
}

export default App
