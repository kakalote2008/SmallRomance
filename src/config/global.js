import resize from './resize'
import util from './util'

const width = util.isPhone() ? document.body.clientWidth : 360;
const height = util.isPhone() ? document.body.clientHeight : 600;

//与时间有关的设置均为毫秒数，本文件底部会自动转化为帧数。
// 大多属性都设有默认值，都可以不用修改   一般只需要修改中文文字
// 所有的文字暂时都不支持换行，字数多的请自行分为多段话。

const config = (function(){

	return {
		// 整体宽高
		width: width,  //---不建议改动
		height: height, //---不建议改动
		//canvas
		canvases:['fall', 'bg', 'firework', 'dialogue'],//---不建议改动
		// 飘落微粒产生间隔
		snowInterval: 60,
		heartInterval: 15,
		// 飘落微粒属性
		snow:{
			x: undefined,
			y: undefined,
			minSize: 5,
			maxSize: 10,
			size: undefined,
			speed: 0.5,
			opacity: 0.8
		},
		heart:{
			x: undefined,
			y: undefined,
			minSize: 15,
			maxSize: 20,
			size: undefined,
			speed: 1,
		},
		// 飘落的类型('snow', 'heart', 'mix')
		fallType: 'snow',

		// 阶段一
		dialogueOpt:{ 
			interval: 3000,  //两句话的间隔时间
			speed: 100,   //语速
			color1: '#ff00ff',
			font1: '14px Arial',
			color2: '#f97afb',
			color3: 'red',
			color4: '#ffff00',
			color5: '#00ff00',
			color6: '#00ffff',
			color7: '#fff',
		},
		// type对应上面的color与font  若没有对应的 则默认为color1或font1
		dialogue:[
			{type:6, name:'导演', txt:'快过年了，我们去放烟花吧！'},
			{type:2, name:'佳佳', txt:'天还这么亮，现在放烟花也不好看。'},
			{type:2, name:'佳佳', txt:'再说你那有烟花吗？'},
			{type:6, name:'导演', txt:'我当然有烟花啦。'},
			{type:6, name:'导演', txt:'你那有打火机吗？'},
			{type:2, name:'佳佳', txt:'没有呀～'},
			{type:6, name:'导演', txt:'那你是怎么点燃我的心的？'},
			{type:2, name:'佳佳', txt:'。。。'},
			{type:2, name:'佳佳', txt:'可是我的心还没有被你点燃呀。'},
			{type:6, name:'导演', txt:'别慌，我去买个打火机先。'},
			{type:2, name:'佳佳', txt:'打火机可点不燃我的心。'},
			{type:6, name:'导演', txt:'天快黑了，我要为你点燃整片天空。'},

		],
		// 阶段二
		sunset: 5000,   // 天黑时间

	    // 阶段三
		fireworkInterval:[60, 240],// 烟花产生间隔 //---不建议改动
		//烟花的属性
		fireworks:{ 
			x: undefined,
			y: height,
			xEnd: undefined,
			yEnd: undefined,
			size: 2,
			radius: [1, 2],  //烟花半径
			velocity: 3,  //速率
			opacity: 0.8,
			count: [150,250],   //炸裂后粒子数
			wait: undefined,  //消失后 => 炸裂  等待时间
			color: undefined,  //烟花颜色
		},
		fireWords:'我们的2018|很漫长|很艰苦|但是也很甜蜜|因为|我们有了小葡萄|因为|我们有了一个家',  // '|' 为分隔符
		// hue:210 lightness 0
		skyColor:'hsla({hue}, 60%, {lightness}%, 0.2)',	
		fireOpt: {
			wordInterval: 4000, //每段话出现的间隔时间
		},
    //烟花字的参数
    shape:{ 
      gap: 3,   //粒子的间隔数 gap越大 粒子数越少
    },
    word:{  
      size: 50,
      y: height / 4
    }, 

	
		//阶段四
		titleWords:'祝我的老婆大人|生日快乐|永远幸福开心', // '|' 为分隔符
		titleOpt:{
			gap: 4,
			size: 50,  //最后字的大小
			pSize: 8,
			delay: 4000, //
			distance: 120, //行间距
			e: 5000 //速率
		},
		


		

		
	}
})();

//ms => 帧
config.dialogueOpt.interval = util.transTime(config.dialogueOpt.interval, 120);
config.dialogueOpt.speed = util.transTime(config.dialogueOpt.speed, 18);

config.sunset = util.transTime(config.sunset, 600);

config.fireOpt.wordInterval = util.transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = util.transTime(config.fireOpt.denseTime, 600);

config.titleOpt.delay = util.transTime(config.titleOpt.delay, 240);
config.titleOpt.e = util.transTime(config.titleOpt.e, 240);

resize(config.width, config.height, config.canvases);

export default config