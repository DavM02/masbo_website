export default function DetailsTabs({ activeTab, setActiveTab }) {
  return (
    <div
      className="row s-between gap-30 wrap">
      <h3
        onClick={() => setActiveTab('working')}
        className={`text-dark capitalize cursor-pointer ${activeTab === 'working' ? 'active' : 'inactive'}`}>
        Working Process
      </h3>

      <h3
        onClick={() => setActiveTab('advantages')}
        className={`text-dark capitalize cursor-pointer ${activeTab === 'advantages' ? 'active' : 'inactive'}`}>
        Advantages
      </h3>

      <h3
        onClick={() => setActiveTab('projects')}
        className={`text-dark capitalize cursor-pointer ${activeTab === 'projects' ? 'active' : 'inactive'}`}>
        Last Projects
      </h3>
    </div>
  )
}
