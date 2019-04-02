import React, { Component } from 'react';
import { Route,Switch} from 'react-router-dom';
import './App.css';
import Navigationbar from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from './components/searchbox';
import Tableview from './components/tableview';
import Pagination from './components/pagination';
import _ from 'lodash';
import UserDetail from './components/user';


class App extends Component {

  constructor(){
    super();
    this.state = {
      users:[],
      pagesize:10,
      currentpage:1,
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('http://demo9197058.mockable.io/users').then(response=> response.json()).then(res=>{
      this.setState({users:res})
    })
  }


  onsort = (name) =>{
    const sortedarray = _.sortBy(this.state.users,name);
    this.setState({
      users:sortedarray
    })
    console.log(sortedarray);
  }
  handlepagechange= (page)=>{
    this.setState({
      currentpage:page
    })
  }

  onsearch = (e)=>{
    this.setState({
      searchfield:e.target.value,
    })

    console.log(this.state.searchfield);

    

    // const filteredArray =arr.filter((user)=>(
    //    user.first_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    // ))
  }
  handBack(e){
    e.preventdefault();
    console.log("back btn pressed");
    this.props.history.push('/')
  }
   
  render(){
    // this.state.users.map((user)=>(
    //   console.log(user)
    // ))


    const filteredArray =this.state.users.filter((user)=>(
      user.first_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
   ))

   //console.log(filteredArray);
    return (
      <React.Fragment>
        <Switch>
          <Route path="/user/:id"  exact render={(props)=><UserDetail user={this.state.users} {...props}/>}/>
         <Route path="/">
         <Navigationbar />
         <div className="container-fluid">
        <div className="row main App">
        <SearchBox onsearch={this.onsearch} value={this.state.searchfield}/>
        <Tableview users={filteredArray}
        pagenumber={this.state.currentpage}
        pagesize={this.state.pagesize} 
        handlesort={this.onsort}/>
       </div>
        <Pagination pagesize={this.state.pagesize} 
        itemcount ={this.state.users.length}
        onPageChange={this.handlepagechange}
        currentpage={this.state.currentpage}
       />
      </div> 
       </Route>
        </Switch>
        
        
      </React.Fragment>
    );
  }
}
export default App;
