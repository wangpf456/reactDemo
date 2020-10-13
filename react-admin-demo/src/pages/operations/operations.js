import React from 'react'
import { Tabs, Radio } from 'antd';
import utils from "../../common/utils"
import styles from './styles/operations.scss'
const { TabPane } = Tabs;

const PREFIX = 'operations-ctrl';
const cx = utils.classnames(PREFIX, styles);//得到cx方法


class Operations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'top',
			list: [
				{
					id: '1',
					title: 'tab1',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '2',
					title: 'tab2',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '3',
					title: 'tab3',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '4',
					title: 'tab4',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '5',
					title: 'tab5',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '6',
					title: 'tab6',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '7',
					title: 'tab7',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '8',
					title: 'tab8',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '9',
					title: 'tab9',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				},{
					id: '10',
					title: 'tab10',
					text: '杀青的最后一镜，用四个半月的时间陪你走过了十年......感谢戏里遇到的每一个人，感谢戏外一起工作的每一位老师、同仁，再见林楠笙，期待叛逆者🙃'
				}
			]
		};
	}
	handleModeChange = e => {
		const mode = e.target.value;
		this.setState({ mode });
	};
	render() {
		const { mode,list } = this.state;
		return (
			<div className={`${cx('container')}`}>
				<Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
					<Radio.Button value="top">Horizontal</Radio.Button>
					<Radio.Button value="left">Vertical</Radio.Button>
				</Radio.Group>
				<Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
					{[...Array(10).keys()].map(i => (
						<TabPane tab={`Tab-${i}`} key={i} disabled={i === 8}>
							{list.map((item,index) => <h1 key={index}>{item.title}</h1>)}
						</TabPane>
					))}
				</Tabs>
			</div>
		)
	}
}

export default Operations