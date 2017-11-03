import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           itemdetails : [{id:1,name:'Pasta Carbonara',price:12,qty:0},
               {id:2,name:'Margherita Pizza',price:27,qty:0},
               {id:3,name:'Mushroom Risotto',price:16,qty:0},
               {id:4,name:'Panzenella',price:10,qty:0},
               {id:5,name:'Bruschetta',price:10,qty:0},
               {id:6,name:'Tiramisu',price:6,qty:0}]
        }
     }

    render() {
        return (
            <div className="container-fluid">
            {this.state.itemdetails.map(function(list, index){
                return <div className="row">
                    <div className="col-sm-4" >{list.name}</div>
                    <div className="col-sm-4" >{list.price}</div>
                    <div className="col-sm-4" >
                    <button type="button"className={styles.button} key={ list.id }>Add</button>
                    </div></div>;
              })}
          </div>
        );
    }
}

export default Menu;
