import React, { Fragment } from 'react'
import { Calendar,Pagination  } from 'antd';
import './index.css'
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
moment.locale('zh-cn');

class calander extends React.Component{
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }
    
    render(){
        return(
            <Fragment>
                <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} locale={locale}/>
                </div>
                <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.onChange.bind(this)} />
            </Fragment>
        )
    }
}

export default calander