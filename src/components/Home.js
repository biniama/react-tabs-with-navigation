import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core'

import About from './About';
import Contact from './Contact';

function Home({ match: { params: { page } }, history }) {

  const tabNameToIndex = {
    'about': 0,
    'contact': 1
  }

  const indexToTabName = {
    0: 'about',
    1: 'contact'
  }

  // use the given input page as the starting page by setting the state
  const [selectedTab, setSelectedTab] = useState(tabNameToIndex[page])

  const handleTabChange = (event, newValue) => {
    // set the url to whatever is the tab name
    history.push(`/home/${indexToTabName[newValue]}`)
    setSelectedTab(newValue)
  }

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>

      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Contact />}
    </>
  );
}

export default Home;
