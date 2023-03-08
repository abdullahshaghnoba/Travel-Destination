import './Tours.css'
const db = require("../../data/db.json")
function Tours(){
    return (
        <div className="Tours">
            {db.map((element)=>{
              return (<div className="toursElements">
                <p>{element.name}</p>
                <img src={element.image}/>
                <hr/>
              </div>)
            })}
        </div>
    )
}
export default Tours;