import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": "Nike Shoes",
        "src": [
          "https://cdn.vortexs.io/api/images/c7f404af-2b7b-4644-8b2d-1036ff7da950/1140/w/10670-giay-nike-air-jordan-1-low-bred-toe.jpeg"
          ],
        "description": "Blabla",
        "content": "hello",
        "price": 6000000,
        "colors":["red","black"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index})
    const images = this.myRef.current.children;
    images.className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;