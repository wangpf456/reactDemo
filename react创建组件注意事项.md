新建组件注意事项
1、Component作为一个组件引入了，不需要再执行React.Component
2、使用class继承，元素必须在render()方法里面返回
3、样式类名书写是className，不是class
4、一定要将组件导出export default componentName
5、react组件名必须大写字母开头
6、只能return一个根元素，不能return两个根元素，也就是说renturn的标签必须包裹在一个根标签里面，不能是两个同级标签

import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Job</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>李狗蛋</td>
            <td>程序猿</td>
          </tr>
          <tr>
            <td>王翠花</td>
            <td>攻城狮</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Table