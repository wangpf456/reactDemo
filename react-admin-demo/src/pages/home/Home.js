import React from 'react'
import utils from '../../common/utils'
import barOption from './barOption';
import ReactEcharts from 'echarts-for-react';
import { Cascader,TimePicker,Collapse,Carousel,Card } from 'antd';
import moment from 'moment';

import 'isomorphic-fetch'
import 'es6-promise'
import styles from './home.scss'

const PREFIX = 'amap-layer';
const cx = utils.classnames(PREFIX, styles);//得到cx方法
const options = [
	{
	  value: '河北省',
	  label: '河北省',
	  children: [
		{
		  value: '沧州市',
		  label: '沧州市',
		  children: [
			{
				value: '新华区',
				label: '新华区',
			},{
				value: '运河区',
				label: '运河区',
			},{
				value: '沧县',
				label: '沧县',
			},{
				value: '青县',
				label: '青县',
			},{
				value: '东光县',
				label: '东光县',
			},{
				value: '海兴县',
				label: '海兴县',
			},{
				value: '盐山县',
				label: '盐山县',
			},{
				value: '肃宁县',
				label: '肃宁县',
			},{
				value: '南皮县',
				label: '南皮县',
			},{
				value: '吴桥县',
				label: '吴桥县',
			},{
				value: '献县',
				label: '献县',
			},{
				value: '孟村回族自治县',
				label: '孟村回族自治县',
			},{
				value: '泊头市',
				label: '泊头市',
			},{
				value: '任丘市',
				label: '任丘市',
			},{
				value: '黄骅市',
				label: '黄骅市',
			},{
				value: '河间市',
				label: '河间市',
			}
		  ],
		},{
			value: '张家口市',
			label: '张家口市',
			children: [
				{
					value: '桥东区',
					label: '桥东区'
				},{
					value: '宣化区',
					label: '宣化区'
				},{
					value: '万全区',
					label: '万全区'
				},{
					value: '崇礼区',
					label: '崇礼区'
				},{
					value: '张北县',
					label: '张北县'
				},{
					value: '蔚县',
					label: '蔚县'
				},{
					value: '阳原县',
					label: '阳原县'
				},{
					value: '涿鹿县',
					label: '涿鹿县'
				}
			]
		},{
			value: '承德市',
			label: '承德市',
			children: [
				{
					value: '双滦区',
					label: '双滦区'
				},{
					value: '承德县',
					label: '承德县'
				},{
					value: '兴隆县',
					label: '兴隆县'
				},{
					value: '滦平县',
					label: '滦平县'
				},{
					value: '隆化县',
					label: '隆化县'
				},{
					value: '丰宁满族自治县',
					label: '丰宁满族自治县'
				},{
					value: '围场满族蒙古族自治县',
					label: '围场满族蒙古族自治县'
				},{
					value: '平泉市',
					label: '平泉市'
				}
			]
		}
	  ],
	},
	{
	  value: '山西省',
	  label: '山西省',
	  children: [
		{
		  value: '太原市',
		  label: '太原市',
		  children: [
			{
				value: '小店区',
				label: '小店区',
			},{
				value: '迎泽区',
				label: '迎泽区',
			},{
				value: '杏花岭区',
				label: '杏花岭区',
			},{
				value: '尖草坪区',
				label: '尖草坪区',
			},{
				value: '万柏林区',
				label: '万柏林区',
			},{
				value: '晋源区',
				label: '晋源区',
			}
		  ],
		},{
			value: '临汾市',
			label: '临汾市',
			children: [
			  {
				  value: '尧都区',
				  label: '尧都区',
			  },{
				  value: '洪洞县',
				  label: '洪洞县',
			  },{
				  value: '安泽县',
				  label: '安泽县',
			  },{
				  value: '蒲县',
				  label: '蒲县',
			  },{
				  value: '侯马市',
				  label: '侯马市',
			  },{
				  value: '霍州市',
				  label: '霍州市',
			  }
			],
		}
	  ],
	},
	{
		value: '河南省',
		label: '河南省',
		children: [
		  	{
				value: '郑州市',
				label: '郑州市',
				children: [
					{
						value: '中原区',
						label: '中原区',
					},{
						value: '管城回族区',
						label: '管城回族区',
					},{
						value: '金水区',
						label: '金水区',
					},{
						value: '荥阳市',
						label: '荥阳市',
					},{
						value: '新郑市',
						label: '新郑市',
					},{
						value: '登封市',
						label: '登封市',
					}
				],
		  	},{
				value: '洛阳市',
				label: '洛阳市',
				children: [
					{
						value: '西工区',
						label: '西工区',
					},{
						value: '瀍河回族区',
						label: '瀍河回族区',
					},{
						value: '涧西区',
						label: '涧西区',
					},{
						value: '吉利区',
						label: '吉利区',
					},{
						value: '洛龙区',
						label: '洛龙区',
					},{
						value: '新安县',
						label: '新安县',
					}
			  	],
		  	}
		],
	},
];

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

const myStyle = {
	display: 'flex',
	width: '100%'
}

const { Meta } = Card;

class Home extends React.Component {
	onChange(time, timeString) {
		console.log(time, timeString);
	}
	render() {
		return (
			<div className={`${cx('container')}`}>
				<ReactEcharts
                    option={barOption}
                    style={{width:'100%',height:'300px'}}
                />
				<Cascader options={options} placeholder="请选择" />
				<TimePicker
					onChange={this.onChange}
					defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
				/>
				<Collapse accordion>
					<Panel header="This is panel header 1" key="1">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 2" key="2">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 3" key="3">
						<p>{text}</p>
					</Panel>
				</Collapse>
				<Carousel style={{height: 300}} autoplay>
					<div>
						<h3 style={contentStyle}>1</h3>
					</div>
					<div>
						<h3 style={contentStyle}>2</h3>
					</div>
					<div>
						<h3 style={contentStyle}>3</h3>
					</div>
					<div>
						<h3 style={contentStyle}>4</h3>
					</div>
				</Carousel>
				<div style={myStyle}>
					<Card
						hoverable
						style={{ width: '25%' }}
						cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: '25%' }}
						cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: '25%' }}
						cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: '25%' }}
						cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</div>
			</div>
		)
	}
}


export default Home