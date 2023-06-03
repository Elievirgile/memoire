import React from 'react'
import '../CSS/Footer.css'
import Facebook from '../img/facebook.png'
import Insta from '../img/instagram.png'
export default function Footer () {
  return (
    <div className='contain_footer'>
        <div className='details'>

            <div className='Right'>
               <h6 className='part_one_one'>
                  +229 97979797
               </h6>
               <h6 className='part_one_one'>
                  +229 95959595
               </h6>
               <h6 className='part_one_one'>
                   service-client@eLearning.com
                </h6>
            </div>

            <div className='Left'>
               <h6 className='part_one_one'>
                 Confidentialité
               </h6>
               <h6 className='part_one_one'>
                 Licences
               </h6>
              
            </div>
        </div>

       
    </div>
  )
}
