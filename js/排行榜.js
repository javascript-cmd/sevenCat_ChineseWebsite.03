// 更新排行榜数据的内容
const paihangBook = [{
		'id': '<img class="img_one" src="img/排行榜第一名.png" alt="" />',
		'content': '封总，太太想跟你离婚很久了',
		'contentOne': '盖世神医',
		'contentTwo': '封总，太太想跟你离婚很久了',
		'contentThree': '我就上山打个猎，你让我逐鹿中原？'
	},
	{
		'id': '<img class="img_two" src="img/排行榜第二名.png" alt="" />',
		'content': '皇叔借点功德，王妃把符画猛了',
		'contentOne': '逍遥四公子',
		'contentTwo': '和离前夜，她重生回了出嫁前',
		'contentThree': ' 重生渔村：开局赶海喂饱全家'
	},
	{
		'id': '<img class="img_three" src="img/排行榜第三名.png" alt="" />',
		'content': '离婚后她惊艳了世界',
		'contentOne': '警报！真龙出狱！',
		'contentTwo': '出宫前夜，疯批帝王后悔了',
		'contentThree': '天后老婆狂卷工作，我躺平被全网直播'
	},
	{
		'id': '4',
		'content': '为奴三年后，整个侯府跪求我原谅',
		'contentOne': '无敌六皇子',
		'contentTwo': '被贵妃配给太监当对食后',
		'contentThree': '斗罗V：退婚你提的，我走后你哭什么?'
	},
	{
		'id': '5',
		'content': '春棠欲醉',
		'contentOne': '权力之巅',
		'contentTwo': ' 雪夜活埋后，我夺了假千金凤命',
		'contentThree': '让你入京当质子，你登基为帝？'
	},
	{
		'id': '6',
		'content': '抢我姻缘？转身嫁暴君夺后位',
		'contentOne': '边军悍卒',
		'contentTwo': ' 马甲藏不住，假千金炸翻全京圈 ',
		'contentThree': ' 众仙俯首'
	},
	{
		'id': '7',
		'content': '重生七零再高嫁',
		'contentOne': '葬仙棺',
		'contentTwo': ' 孩子谁爱生谁生，我勾帝心夺凤位',
		'contentThree': '一级一兵团，我靠万魂幡打造亡灵天灾'
	},
	{
		'id': '8',
		'content': '大佬十代单传，我为他一胎生四宝',
		'contentOne': '史上最强师父',
		'contentTwo': ' 八零：空房四年，丈夫带回了战友遗孀 ',
		'contentThree': '重生60：从深山打猎开始致富'
	},
	{
		'id': '9',
		'content': '大佬归来，假千金她不装了',
		'contentOne': '舔狗反派只想苟，女主不按套路走！',
		'contentTwo': '夺妻',
		'contentThree': '不抢个小娘子，当什么纨绔侯爷？'
	},
	{
		'id': '10',
		'content': '饥荒年，我囤货娇养了古代大将...',
		'contentOne': '混沌塔',
		'contentTwo': '傅律师，太太说她不回头了',
		'contentThree': '谁说校花高冷？这校花可太甜软了...'
	}
]

// 
const li_book = document.createElement('li')
const li_bookOne = document.createElement('li')
const li_bookTwo = document.createElement('li')
const li_bookThree = document.createElement('li')
// 获取
const popular_girlOne = document.querySelector('.popular_girlOne')
const popular_boyOne = document.querySelector('.popular_boyOne')
const newBook_girlOne = document.querySelector('.newBook_girlOne')
const newBook_boyOne = document.querySelector('.newBook_boyOne')
// 追加
popular_girlOne.insertBefore(li_book, popular_girlOne.children[0])
popular_boyOne.insertBefore(li_bookOne, popular_boyOne.children[0])
newBook_girlOne.insertBefore(li_bookTwo, newBook_girlOne.children[0])
newBook_boyOne.insertBefore(li_bookThree, newBook_boyOne.children[0])

// map数组重构
let oo = paihangBook.map(item => {
	// 
	return `<a href="#" target="_blank" style="text-decoration: none;">
	<li>${item.id}&nbsp;&nbsp;${item.content}</li>
	        </a> `
})
let oo_one = paihangBook.map(item => {
	// 
	return `<a href="#" target="_blank" style="text-decoration: none;">
	<li>${item.id}&nbsp;&nbsp;${item.contentOne}</li>
	</a> `
})
let oo_two = paihangBook.map(item => {
	// 
	return `<a href="#" target="_blank" style="text-decoration: none;">
	<li>${item.id}&nbsp;&nbsp;${item.contentTwo}</li>
	</a> `
})
let oo_three = paihangBook.map(item => {
	// 
	return `<a href="#" target="_blank" style="text-decoration: none;">
	<li>${item.id}&nbsp;&nbsp;${item.contentThree}</li>
	</a> `
})
// 
li_book.innerHTML = oo.join("")
li_bookOne.innerHTML = oo_one.join("")
li_bookTwo.innerHTML = oo_two.join("")
li_bookThree.innerHTML = oo_three.join("")

// 
document.querySelector('.popular_girlOne li a:nth-child(1)').href = 'https://www.qimao.com/shuku/1879266/'
document.querySelector('.popular_girlOne li a:nth-child(2)').href = 'https://www.qimao.com/shuku/1803283/'
document.querySelector('.popular_girlOne li a:nth-child(3)').href = 'https://www.qimao.com/shuku/222767/'
document.querySelector('.popular_girlOne li a:nth-child(4)').href = 'https://www.qimao.com/shuku/1872563/'
document.querySelector('.popular_girlOne li a:nth-child(5)').href = 'https://www.qimao.com/shuku/1684583/'
document.querySelector('.popular_girlOne li a:nth-child(6)').href = 'https://www.qimao.com/shuku/1836527/'
document.querySelector('.popular_girlOne li a:nth-child(7)').href = 'https://www.qimao.com/shuku/1719564/'
document.querySelector('.popular_girlOne li a:nth-child(8)').href = 'https://www.qimao.com/shuku/1726987/'
document.querySelector('.popular_girlOne li a:nth-child(9)').href = 'https://www.qimao.com/shuku/1699328/'
document.querySelector('.popular_girlOne li a:nth-child(10)').href = 'https://www.qimao.com/shuku/1844850/'

// 
document.querySelector('.popular_boyOne li a:nth-child(1)').href = 'https://www.qimao.com/shuku/195958/'
document.querySelector('.popular_boyOne li a:nth-child(2)').href = 'https://www.qimao.com/shuku/1809361/'
document.querySelector('.popular_boyOne li a:nth-child(3)').href = 'https://www.qimao.com/shuku/1834789/'
document.querySelector('.popular_boyOne li a:nth-child(4)').href = 'https://www.qimao.com/shuku/1747899/'
document.querySelector('.popular_boyOne li a:nth-child(5)').href = 'https://www.qimao.com/shuku/1815020/'
document.querySelector('.popular_boyOne li a:nth-child(6)').href = 'https://www.qimao.com/shuku/1882754/'
document.querySelector('.popular_boyOne li a:nth-child(7)').href = 'https://www.qimao.com/shuku/1888581/'
document.querySelector('.popular_boyOne li a:nth-child(8)').href = 'https://www.qimao.com/shuku/1817221/'
document.querySelector('.popular_boyOne li a:nth-child(9)').href = 'https://www.qimao.com/shuku/1710753/'
document.querySelector('.popular_boyOne li a:nth-child(10)').href = 'https://www.qimao.com/shuku/1767940/'

// 
document.querySelector('.newBook_girlOne li a:nth-child(1)').href = 'https://www.qimao.com/shuku/1879266/'
document.querySelector('.newBook_girlOne li a:nth-child(2)').href = 'https://www.qimao.com/shuku/1876687/'
document.querySelector('.newBook_girlOne li a:nth-child(3)').href = 'https://www.qimao.com/shuku/1957149/'
document.querySelector('.newBook_girlOne li a:nth-child(4)').href = 'https://www.qimao.com/shuku/1949695/'
document.querySelector('.newBook_girlOne li a:nth-child(5)').href = 'https://www.qimao.com/shuku/1960821/'
document.querySelector('.newBook_girlOne li a:nth-child(6)').href = 'https://www.qimao.com/shuku/1945519/'
document.querySelector('.newBook_girlOne li a:nth-child(7)').href = 'https://www.qimao.com/shuku/1949070/'
document.querySelector('.newBook_girlOne li a:nth-child(8)').href = 'https://www.qimao.com/shuku/1949371/'
document.querySelector('.newBook_girlOne li a:nth-child(9)').href = 'https://www.qimao.com/shuku/1948025/'
document.querySelector('.newBook_girlOne li a:nth-child(10)').href = 'https://www.qimao.com/shuku/1950540/'

// 
document.querySelector('.newBook_boyOne li a:nth-child(1)').href = 'https://www.qimao.com/shuku/1956833/'
document.querySelector('.newBook_boyOne li a:nth-child(2)').href = 'https://www.qimao.com/shuku/1961161/'
document.querySelector('.newBook_boyOne li a:nth-child(3)').href = 'https://www.qimao.com/shuku/1952564/'
document.querySelector('.newBook_boyOne li a:nth-child(4)').href = 'https://www.qimao.com/shuku/1950996/'
document.querySelector('.newBook_boyOne li a:nth-child(5)').href = 'https://www.qimao.com/shuku/1940293/'
document.querySelector('.newBook_boyOne li a:nth-child(6)').href = 'https://www.qimao.com/shuku/1971590/'
document.querySelector('.newBook_boyOne li a:nth-child(7)').href = 'https://www.qimao.com/shuku/1962146/'
document.querySelector('.newBook_boyOne li a:nth-child(8)').href = 'https://www.qimao.com/shuku/1948430/'
document.querySelector('.newBook_boyOne li a:nth-child(9)').href = 'https://www.qimao.com/shuku/1943718/'
document.querySelector('.newBook_boyOne li a:nth-child(10)').href = 'https://www.qimao.com/shuku/1946790/'