import React from 'react';
import { Link } from 'react-router-dom';
class Center extends React.Component{
    render(){
        return (
            <div>
                <p>
                1.在上方的import中，载入了 BrowserRouter as Router 和 Route，其意思就是从react-router-dom包中导入Router和Route，
                BrowserRouter是Router中的一种。

                2.路由必须包含在Router标签中，且标签内的元素需包含在一个div中，路由由Route声明

                3.Route中path为路由路径，即浏览器访问地址， commponent为路由跳转时对应的组件。

                4.当访问/Login和/Center时，总会出现路由为 / 这里为Home组件的内容，这是因为当前路由包含/ 就会默认加载，如果想要不显示路由 / 中的内容，添加 exact即可。

                完成上述两步，通过访问想要路由就可以完成页面跳转了，但是这样的跳转还需要结合具体 的链接，类似html中a的标签
                </p>
                <Link to="/">
                    <div>返回首页</div>
                </Link>
            </div>
        )
    }
}
export default Center;