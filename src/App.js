import React, {useEffect, useState} from 'react';
import Desktop from './components/desktop.js';
import Mobile from './components/mobile.js'
import { fetchProject } from './services/'
import { useMediaQuery } from 'react-responsive'

function App() {
  const [projects, setProjects] = useState(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-device-width: 1224px)' })

  async function getProjects() {
    const projects = await fetchProject(error => console.error(error))
    let data = projects.data
    data.some(function(x, i) {
      if (x.name == additional[i].name) {
        data[i] = Object.assign({}, data[i], additional[i]);
      }
    }); 
    setProjects(data);
  }

  const additional = [
  {
    name: 'covid-19-outbreak',
    tag: ['#Javascript', '#React', '#webdev'],
    desc: 'Hello its me Use .flex-initial to allow a flex item to shrink but not grow'
  }, {
    name: 'gatsby-interaction-dashboard',
    tag: ['#Javascript', '#React', '#webdev'],
    desc: 'Hello its me Use .flex-initial to allow a flex item to shrink but not grow'
  }, {
    name: 'react-interaction-dashboard',
    tag: ['#Javascript', '#React', '#webdev'],
    desc: 'Hello its me Use .flex-initial to allow a flex item to shrink but not grow'
  }, {
    name: 'react-native-project',
    tag: ['#Javascript', '#React Native', '#mobiledev'],
    desc: 'Hello its me Use .flex-initial to allow a flex item to shrink but not grow, taking into account'
  }]

  useEffect( () => {
    getProjects();
  }, []);
  return (
  <>
      {isDesktopOrLaptop && <>
        <Desktop projects={projects}/>
      </>}

      {isTabletOrMobile && <> 
        <Mobile />
      </>
      }

  </>
  );
}

export default App;
