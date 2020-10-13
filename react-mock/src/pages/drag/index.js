import React from 'react'
import './index.css'

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    
    handleData(){
        this.dragged.style.opacity = "1";
        this.dragged.style.transform = "scale(1)";
        const from = this.dragged.dataset.id;
        const to = this.target.dataset.id;
        if(from !== to ) {
            var data = this.state.data;
            data.splice(to, 0, data.splice(from, 1)[0]);
            this.setState({data: data});
            this.dragged=this.target;
        }
    }
    dragStart(e) {
        this.dragged = e.target;
    }
    drop(e) {
        e.preventDefault();
        this.dragged.style.opacity = "1";
        this.dragged.style.transform = "scale(1)";
    }
    dragOver(e) {
        e.preventDefault();
    }
    dragEnter(e) {
        e.preventDefault();
        if (e.target.tagName !== "LI") {
            return;
        }
        this.target = e.target;
        this.target.style.opacity = "0.2";
        this.target.style.transform = "scale(1.1)";
        this.handleData();
    }
  
    render() {
        var listItems = this.state.data.map((item, index) => {
            return (
                <li 
                    data-id={index}
                    key={index}
                    style={{background:item.bgColor}}
                    draggable='true'
                    onDragEnter={this.dragEnter.bind(this)}
                    onDrop={this.drop.bind(this)}
                    onDragOver={this.dragOver.bind(this)}
                    onDragStart={this.dragStart.bind(this)}
                    data-item={JSON.stringify(item)}
                >
                    {item.index}
                </li>
            )
        });
        return (
            <ol className ="contain">
                {listItems}
            </ol>
        )
    }
}
class drag extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
            {
                index: 1,
                bgColor: "red"
            },{
                index: 2,
                bgColor: "green"
            },{
                index: 3,
                bgColor: "blue"
            },{
                index: 4,
                bgColor: "yellow"
            },{
                index: 5,
                bgColor: "orange"
            },{
                index: 6,
                bgColor: "grey"
            },{
                index: 7,
                bgColor: "blueviolet"
            },{
                index: 8,
                bgColor: "bisque"
            },{
                index: 9,
                bgColor: "cyan"
            }]
        }
    }
    render() {
        return (
            <div><List data={this.state.data} /></div>
        )
    }
}

export default drag
  