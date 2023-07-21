import React, { useState } from 'react'

function SortFunc({ setSort, setOrder }) {

    const [currentSort, setCurrentSort] = useState('created_at')
    const [currentOrder, setCurrentOrder] = useState('desc')
  
    const ifClickSort = (sort) => {
        setSort(sort)
        setCurrentSort(sort)
        }
  
    const ifClickOrder = (order) => {
        setOrder(order)
        setCurrentOrder(order)
        }

    return (
        <div className="sortContainer">
            <p>SORT BY:</p>
            <div className="sortTopicButtons">
                <button className={currentSort === 'created_at' ? 'active' : ''} onClick={() => ifClickSort('created_at')}>DATE</button>          
                <button className={currentSort === 'votes' ? 'active' : ''} onClick={() => ifClickSort('votes')}>VOTES</button> 
                <button className={currentSort === 'comment_count' ? 'active' : ''} onClick={() => ifClickSort('comment_count')}>COMMENTS</button> 
            </div>
            <div className="sortOrderButtons">
                <button className={currentOrder === 'asc' ? 'active' : ''} onClick={() => ifClickOrder('asc')}>ASCENDING</button>          
                <button className={currentOrder === 'desc' ? 'active' : ''} onClick={() => ifClickOrder('desc')}>DESCENDING</button> 
            </div>
        </div>
    )
}

export default SortFunc