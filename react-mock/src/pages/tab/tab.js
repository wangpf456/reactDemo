import React,{Component} from 'react'
import './tab.css'

class Tab extends Component{
    constructor(props){
        super(props)
    
        const tabs =[
            {name:'tab',index:0,isshow:true},
            {name:'tab',index:1,isshow:true},
            {name:'tab',index:2,isshow:true}
        ]

        this.state={
          tab:0,
          tabs
        }
    }

    RenderTabs(tabs,tab,changeTabs){
        return tabs.map((item, idx) => {
            if(!item.isshow){
                return null;
            }
            return(
                <li 
                    key={item.index} 
                    className ={ tab === idx ? 'active' :'' }  
                    onClick={()=>{changeTabs(idx)}}>
                    {item.name}{idx}
                </li>
            )
        })
    }
    showMain(idx){
        switch (idx) {
            case 0:
                return <div className={`tabContent tab${idx}`}>我是tab {idx}</div>
            case 1:
                return <div className={`tabContent tab${idx}`}>我是tab {idx}</div>
            case 2:
                return <div className={`tabContent tab${idx}`}>我是tab {idx}</div>
            default:
                break;
        }
    }
    
    changeTabe=(idx)=>{
        this.setState({
          tab:idx
        });
    }
    
     
    render(){
        const {tabs,tab} =this.state;
        return(
          <div className="tabchange-box">
            <ul>
                {this.RenderTabs(tabs,tab,this.changeTabe)}
            </ul>
            {this.showMain(tab)}
          </div>
        )
    }
}

export default Tab
