import React from 'react';
import { useState } from 'react';
import Analytics from './Analytics';
import Data_entry from './Data_entry';
import Layout from './Layout';
import Data_exit from './Data_exit';


// Assume you create a corresponding CSS file

function Navbar() {

    const analyticsId=0;
    const layoutId=1;
    const dataentryId=2;
    const dataexitId=3;

    const [currentView, setCurrentView] = useState(0);

    
    return (
        <main>
            <div className="flex">
                <div onClick={() => setCurrentView(prev => analyticsId)} className={"text-md p-5 bg-gray-900 text-white hover:bg-white hover:text-black grow text-center " + (currentView === analyticsId ? "underline text-xl" : "")} >Analytics</div>
                <div onClick={() => setCurrentView(prev => layoutId)} className={"text-md p-5 bg-gray-900 text-white hover:bg-white hover:text-black grow text-center " + (currentView === layoutId ? "underline text-xl" : "")}>Layout</div>
                <div onClick={() => setCurrentView(prev => dataentryId)} className={"text-md p-5 bg-gray-900 text-white hover:bg-white hover:text-black grow text-center " + (currentView === dataentryId ? "underline text-xl" : "")} >Data Entry</div>
                <div onClick={() => setCurrentView(prev => dataexitId)} className={"text-md p-5 bg-gray-900 text-white hover:bg-white hover:text-black grow text-center " + (currentView === dataexitId ? "underline text-xl" : "")} >Data Exit</div>
            </div>
            <Analytics display={currentView === analyticsId} />
            <Layout display={currentView === layoutId} />
            <Data_entry display={currentView === dataentryId} />
            <Data_exit display={currentView === dataexitId} />

        </main>

    );
}


export default Navbar;