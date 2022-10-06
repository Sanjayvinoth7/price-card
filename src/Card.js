import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'



function Card(props){

return(

      
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.card.PlanName}</h5>
            <h6 className="card-price text-center">${props.card.price}<span class="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">

            {props.card.features.map((detail) => {
              {
             if(detail.isEnabled == true)
             {
             return( 
             <li>
               <span className="fa-li">
                <FontAwesomeIcon icon={faCheck} />
               </span>
               <strong>{detail.name}</strong>

             </li>
             );
            } else {
              return(
                <li> 
                  <span className="fa-li text-muted">
                   <FontAwesomeIcon icon={faXmark}/>
                  </span>
              
                {detail.name1}
                </li>
              );
            }
          }
          })}
            
            
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
       </div>
       </div>
 
);
}

export default Card;