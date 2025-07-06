// 七猫动态数据更新
const Arry_info = [{
		'name': '  2025七猫短剧征稿啦，高额保底额外分成!  ',
		'time': ' 02-24  '
	},
	{
		'name': '关于2025年江苏省网络作家协会会员发展工作的通知 ',
		'time': ' 02-13'
	},
	{
		'name': ' 七猫中文网x奇妙小说网25年1月稿费已于2月8日发放完毕  ',
		'time': ' 02-08  '
	},
	{
		'name': ' 2024年度中国数字阅读用户现状调研”问卷调查  ',
		'time': ' 02-08  '
	},
	{
		'name': ' 七猫1月举报直通车处理情况来啦 ',
		'time': ' 02-05 '
	},
	{
		'name': ' 七猫【剧本】创作功能上线啦！',
		'time': '04-27'
	}
]

// 获取实时更新的复杂数组里面的数据
let sss = Arry_info.map(copy => {
	// 
	return `<a href="#" style="text-decoration: none;" target="_blank">
	<li>${copy.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${copy.time}</li>
	        </a>`
})
// 
const qimao_data = document.querySelector('.qimao_data')
// 去除数组的格式
qimao_data.innerHTML = sss.join("")

// 添加链接属性
document.querySelector('.qimao_data a:nth-child(1)').href = 'https://www.qimao.com/gonggao/67bc0dfe87cbf9031233088c/'
document.querySelector('.qimao_data a:nth-child(2)').href = 'https://www.qimao.com/gonggao/67ad64fc87cbf95e09602c78/'
document.querySelector('.qimao_data a:nth-child(3)').href = 'https://www.qimao.com/gonggao/67a707b587cbf96400391711/'
document.querySelector('.qimao_data a:nth-child(4)').href = 'https://www.wjx.cn/vm/h7i0nEk.aspx'
document.querySelector('.qimao_data a:nth-child(5)').href = 'https://www.qimao.com/gonggao/67a2fcd0727af15ef57deb68/'
document.querySelector('.qimao_data a:nth-child(6)').href = 'https://www.qimao.com/gonggao/680ddf3787cbf93d6248b00b/'