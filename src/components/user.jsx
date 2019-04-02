import React, { Component } from "react";
import Navigationbar from "./Navigationbar";

class UserDetail extends Component {
  state = {
    user: this.props.user,
    filteruser: []
  };



  handBack(e){
    e.preventDefault();
    this.props.history.push('/')
    console.log(this.props)
  }

  render() {
    // console.log(this.props);

    //    console.log(filteruser[0])
    const filteruser = this.props.user.filter(u => {
      if (u.id == this.props.match.params.id) {
        //using == because id is in string dat type
        return u;
      }
    });

    return (
      <React.Fragment>
        <Navigationbar handBack={this.handBack.bind(this)}/>
        <div>
          {filteruser.map((u,key) => {
            
            return <div className="App">
              <h1 className="display-3">{u.first_name} <hr/> </h1>
              <h1 key={u.id}> Company :  <small className="text-muted">{u.company_name} </small><hr /></h1>
              <h1 key={u.id}> City: <small className="text-muted">{u.city} </small> <hr /></h1>
              <h1 key={u.id}> State: <small className="text-muted">{u.state} </small> <hr /></h1>
              <h1 key={u.id}> Zip: <small className="text-muted">{u.zip}  </small><hr /></h1>
              <h1 key={u.id}> Email:<small className="text-muted">{u.email} </small>  <hr /></h1>
              <h1 key={u.id}>Web: <small className="text-muted">{u.web} </small> <hr /></h1>
              <h1 key={u.id}>Age: <small className="text-muted">{u.age} </small> <hr /></h1>

              <h1 />
            </div>;
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default UserDetail;
