import { useState } from 'preact/hooks'
import './details.scss'
import { AnimatePresence } from 'framer-motion'
import DetailsTabs from './DetailsTabs'
import WorkingProcess from './WorkingProcess'
import Advantages from './Advantages'
import LastProjects from './LastProjects'
import SmoothAppearance from '@ui/SmoothAppearance'

export default function Details() {
  const [ activeTab, setActiveTab ] = useState('working')

  return (
    <section
      id="details">
      <div
        className="container">
        <DetailsTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab} />

        <AnimatePresence
          mode="wait">
          {activeTab === 'working' && <SmoothAppearance
            updateLayout={true}
            key={"working-process"}
            blur={true}>
            <WorkingProcess />
          </SmoothAppearance>}

          {activeTab === 'advantages' && <SmoothAppearance
            updateLayout={true}
            key={"advantages"}
            blur={true}>
            <Advantages /></SmoothAppearance>}

          {activeTab === 'projects' && <SmoothAppearance
            updateLayout={true}
            blur={true}
            key={'last-projects'}>
            <LastProjects /></SmoothAppearance>}
        </AnimatePresence>
      </div>
    </section>
  )
}
