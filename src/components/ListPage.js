import React,{Component} from 'react';
import {Card, Table} from "react-materialize";
import {Link} from "react-router-dom";

class ListPage extends Component {
  constructor(props){
    super(props);
    this.props.onLoadRequest();
    console.log(this.props);
  }
  renderListItems(items) {
    return items.map(item =>
        (<tr key={item.id}>
          <td>
            <Link to={`ListExample/${item.id}`}>{item.title}</Link>
          </td>
          <td>
            {item.id}
          </td>
        </tr>),
    );
  }
  render(){

    if(!this.props.searching) {
      return (
          <div>
            <Card s={8}>
            <Table hoverable>
              <thead>
              <tr>
                <td>Title</td>
                <td>ID #</td>
              </tr>
              </thead>
              <tbody>
              {this.renderListItems(this.props.listItems)}
              </tbody>
            </Table>
            </Card>
          </div>
      );
    }
    return(<div>Loading!</div>)
}
}
export default ListPage;
