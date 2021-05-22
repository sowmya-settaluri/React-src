import React from 'react'
import Pricingtab from '../component/Pricingtab'

import pricing from '../css/pricing.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Pricing = () => {
    return (
        <div>
            <div className="pricing-table">
            <Pricingtab title={'Technology'} price1={'$'} price2={'15'} price3={'/MO'}
             list1a={'20'} list1b={'modules'} list2a={'3'} list2b={'books'} 
             list3a={'1'} list3b={'Domain name'} list4a={'3'} list4b={'tutors'}
              list5a={'life'} list5b={'time access'}/>

            <Pricingtab title={'Art'} price1={'$'} price2={'30'} price3={'/MO'}
             list1a={'30'} list1b={'modules'} list2a={'5'} list2b={'books'} 
             list3a={'1'} list3b={'Domain name'} list4a={'2'} list4b={'tutors'}
              list5a={'life'} list5b={'time access'}/>

            <Pricingtab title={'Softskills'} price1={'$'} price2={'50'} price3={'/MO'}
             list1a={'30'} list1b={'modules'} list2a={'1'} list2b={'books'} 
             list3a={'1'} list3b={'Domain name'} list4a={'4'} list4b={'tutors'}
              list5a={'life'} list5b={'time access'}/>

            <Pricingtab title={'Socialskills'} price1={'$'} price2={'80'} price3={'/MO'}
             list1a={'100'} list1b={'modules'} list2a={'5'} list2b={'books'} 
             list3a={'1'} list3b={'Domain name'} list4a={'3'} list4b={'tutors'}
              list5a={'life'} list5b={'time access'}/>
        
    </div>
        </div>
    )
}

export default Pricing

// <Pricingtab title={'Technology'} price={'$','15','MO'} list1={'20','modules'} list2={'3','books'} list3={'1','Domain name'} list4={'3','tutors'} list5={'life','time access'}/>
/*<div className="pricing-card">
            <h3 className="pricing-card-header">Technology</h3>
            <div className="price"><sup>$</sup>15<span>/MO</span></div>
            <ul>
                <li><strong>20</strong>modules</li>
                <li><strong>3</strong>BOOKS</li>
                <li><strong>1</strong>Domain Name</li>
                <li><strong>3</strong>Tutors</li>
                <li><strong>LIfe</strong>time access</li>
            </ul>
            <a href="#" className="order-btn">Order Now</a>
        </div>
        <div className="pricing-card">
            <h3 className="pricing-card-header">Art</h3>
            <div className="price"><sup>$</sup>30<span>/MO</span></div>
            <ul>
                <li><strong>30</strong>modules</li>
                <li><strong>5</strong>books</li>
                <li><strong>1</strong>Domain Name</li>
                <li><strong>2</strong>tutors</li>
                <li><strong>life</strong>time access</li>
            </ul>
            <a href="#" className="order-btn">Order Now</a>
        </div>
        <div className="pricing-card">
            <h3 className="pricing-card-header">Softskills</h3>
            <div className="price"><sup>$</sup>50<span>/MO</span></div>
            <ul>
                <li><strong>30</strong>modules</li>
                <li><strong>1</strong>tutors</li>
                <li><strong>1</strong>Domain Name</li>
                <li><strong>4</strong>tutors</li>
                <li><strong>life</strong>time access</li>
            </ul>
            <a href="#" className="order-btn">Order Now</a>
        </div>
        <div className="pricing-card">
            <h3 className="pricing-card-header">Socialskills</h3>
            <div className="price"><sup>$</sup>80<span>/MO</span></div>
            <ul>
                <li><strong>100</strong>modules</li>
                <li><strong>5</strong>books</li>
                <li><strong>1</strong>Domain Name</li>
                <li><strong>3</strong>tutors</li>
                <li><strong>life</strong>time access</li>
            </ul>
            <a href="#" className="order-btn">Order Now</a>
        </div>
*/