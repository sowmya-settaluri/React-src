import React from 'react'

const Pricingtab = ({title,price1,price2,price3,list1a,list1b,list2a,list2b,list3a,list3b,list4a,list4b,list5a,list5b}) => {
    return (
        < >
         <div className="pricing-card">
            <h3 className="pricing-card-header">{title}</h3>
            <div className="price"><sup>{price1}</sup>{price2}<span>{price3}</span></div>
            <ul>
                <li><strong>{list1a}</strong>{list1b}</li>
                <li><strong>{list2a}</strong>{list2b}</li>
                <li><strong>{list3a}</strong>{list3b}</li>
                <li><strong>{list4a}</strong>{list4b}</li>
                <li><strong>{list5a}</strong>{list5b}</li>
            </ul>
            <a href="#" className="order-btn ap">Order Now</a>
        </div>
        </>
    )
}

export default Pricingtab
