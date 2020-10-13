import React from 'react'
import {Calendar} from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
moment.locale('zh-cn');

class CalendarList extends React.Component{
    state = {
        date: [new Date(), new Date()]
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div>
                <Calendar locale={locale}/>
            </div>
        )
    }
}
export default CalendarList