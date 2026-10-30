import React,{useState} from 'react'
import { Collapse, Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import CardGrp from './CardGrp'

const BookOnline = () => {
    const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
   
  return (
    <div>
        <h1 className='heading'>Choose Your Destination</h1>
        
        <div className='pagination-section'>
        <Pagination aria-label="Page navigation example" size="sm">
            <PaginationItem>
                <PaginationLink onClick={toggleNavbar}  href="" className='page-item'>All Services Portland Metro Area</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink  href="#" className='page-item'>Portland Metro Area</PaginationLink>
            </PaginationItem>
             <PaginationItem>
                <PaginationLink href="#" className='page-item'>Columbia River Gorge</PaginationLink>
            </PaginationItem>
        </Pagination>
        </div>
     
     <Collapse isOpen={!collapsed}>
          <CardGrp />
     </Collapse>

    </div>
  )
}

export default BookOnline