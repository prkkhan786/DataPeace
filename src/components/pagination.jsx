import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
  const{ currentpage,pagesize,itemcount } =  props;
  const pagecount = Math.ceil(itemcount/pagesize);  
  //start
    var startpage, endpage;
    if(pagecount<=10){
      startpage=1;
      endpage=pagecount;
    }else{
      if(currentpage<=6){
        startpage=1;
        endpage=10;
      }else if(currentpage+4>=pagecount){
        startpage=pagecount - 9 ;
        endpage = pagecount;
      }else{
        startpage=currentpage-5;
        endpage=currentpage+4;
      }
    }
 
  var startIndex = (currentpage - 1) * pagesize;
  var endIndex = Math.min(startIndex   + pagesize - 1, itemcount - 1);
  // console.log(startIndex);
  // console.log(endIndex);
  const pages = _.range(startpage,endpage+1);
  
    return ( 
      <div className="center">
        <nav aria-label="Page navigation example" className="center">
  <ul className="pagination">
  <li className="page-item"> <a className="page-link">  Prev</a> </li>
      {pages.map(page=>(
        <li key={page}className={page===props.currentpage ? 'page-item active' : 'page-item'}> <a className="page-link" onClick={()=> props.onPageChange(page)}> {page} </a></li>
      ))}
        <li className="page-item"> <a className="page-link">  Next</a> </li>
  </ul>
</nav>
      </div>

     );
}
export default Pagination;