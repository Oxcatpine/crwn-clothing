import React from 'react';
import './shoppage.styles.scss';
import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class shopPage extends React.Component {
    constructor (props){
        super (props);


        this.state = {
            collecitons:SHOP_DATA,

        }
    }
   render (){
       return (
       
           <div>
             <div className='shop-page'>
               {this.state.collecitons.map (({id,...otherCollectionProps})=>(
                   <CollectionPreview key= {id}{...otherCollectionProps}/>
               ) )}
             </div>
           </div>
       )
   }

}

export default shopPage;


