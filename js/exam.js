var question =[
	{
		title: '題目1',
		answer: [
			{
				bbb: '答案一',
				correct: true
			},
			{
				bbb: '答案二',
				correct: false
			},
			{
				bbb: '答案三',
				correct: false
			}
		]
	},
	{
		title: '題目2',
		answer: [
			{
				bbb: '我是對的',
				correct: true
			},
			{
				bbb: '我是錯的',
				correct: false
			},
			{
				bbb: '我是錯的',
				correct: false
			}
		]
	},
	{
		title: '題目3',
		answer: [
			{
				bbb: '錯',
				correct: false
			},
			{
				bbb: '對',
				correct: true
			},
			{
				bbb: '錯',
				correct: false
			}
		]
	},
	{
		title: '題目4',
		answer: [
			{
				bbb: '答案一',
				correct: true
			},
			{
				bbb: '答案二',
				correct: false
			},
			{
				bbb: '答案三',
				correct: false
			}
		]
	},
	{
		title: '題目5',
		answer: [
			{
				bbb: '答案一',
				correct: true
			},
			{
				bbb: '答案二',
				correct: false
			},
			{
				bbb: '答案三',
				correct: false
			}
		]
	},
	{
		title: '題目6',
		answer: [
			{
				bbb: '答案一',
				correct: true
			},
			{
				bbb: '答案二',
				correct: false
			},
			{
				bbb: '答案三',
				correct: false
			}
		]
	}
];
var x = 0;
function enterText(x){
	$('.exam .title').text(question[x].title);
	for (var i=0; i<question[x].answer.length; i++) {
		$('.answer').eq(i).text(question[x].answer[i].bbb);
	}
}
$('.start').click(function (e) { 
	e.preventDefault();
	enterText(x);
	// x = x+1;
	// console.log(x);
});

$('.answer').click(function (e) { 
	e.preventDefault();
	var ccc = $(this).data('answer');
	if (question[x].answer[ccc].correct == true){
		console.log('成功');
		// $('.result').text('成功');
	} else {
		console.log('失敗');
		x = x+1;
		// $('.result').text('失敗');
	}
	// console.log('成功');
});

$('.nextQ').click(function (e) { 
	e.preventDefault();
	enterText(x);
});







