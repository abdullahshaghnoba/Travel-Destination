import './Tours.css'
import Tour from '../Tours/tour/Tour'
const db = require("../../data/db.json")

function Tours() {

  return (
    <div id = 'tours' className='tours'>

      <Tour key={db.id} data={db}/>
    </div>
  )
}
export default Tours;
// done