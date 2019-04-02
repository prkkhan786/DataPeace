import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import Pagination from './pagination';
import { paginate } from '../paginate';


class Tableview extends Component {
    state = {  }
    render() { 

        const paginatedata = paginate(this.props.users,this.props.pagenumber,this.props.pagesize);

        return ( <div className="col tablediv">
           <table className="table">
  <thead>
    <tr>
      <th scope="col" onClick={()=>this.props.handlesort('first_name')}> <i className="fas fa-sort"> </i> Firstname</th>
      <th scope="col" onClick={()=>this.props.handlesort('last_name')}> <i className="fas fa-sort"> </i> Lastname</th>
      <th scope="col" onClick={()=>this.props.handlesort('company_name')}> <i className="fas fa-sort"> </i>  Comapnyname</th>
      <th scope="col" onClick={()=>this.props.handlesort('city')}> <i className="fas fa-sort"></i> City </th>
      <th scope="col" onClick={()=>this.props.handlesort('state')}> <i className="fas fa-sort"></i> State</th>
      <th scope="col" onClick={()=>this.props.handlesort('zip')}> <i className="fas fa-sort"> Zip</i> </th>
      <th scope="col" onClick={()=>this.props.handlesort('email')}> <i className="fas fa-sort"></i>Email</th>
      <th scope="col" onClick={()=>this.props.handlesort('web')}> <i className="fas fa-sort"></i>Web</th>
      <th scope="col" onClick={()=>this.props.handlesort('age')}> <i className="fas fa-sort"></i>Age</th>
    </tr>
  </thead>
  <tbody>
  {paginatedata.map((user)=>(
        <tr>
             <td key={user.id}> <Link to={`/user/${user.id}`}>  {user.first_name} </Link>  </td>
             <td key={user.last_name}>{user.last_name}</td>
             <td key={user.company_name}>{user.company_name}</td>
             <td key={user.city}>{user.city}</td>
             <td key={user.state}>{user.state}</td>
             <td key={user.zip}>{user.zip}</td>
             <td key={user.email}>{user.email}</td>
             <td key={user.web}>{user.web}</td>
             <td key={user.age}>{user.age}</td>
        </tr>
     ))}
   
  </tbody>
</table>
        </div> );
    }
}
 
export default Tableview;