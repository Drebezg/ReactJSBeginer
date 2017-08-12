import News from './News';
import Comments from './Comments';

const my_news = [		
{
	id: 0,				
	author:	'Саша Печкин',				
	text:	'В	четверг,	четвертого	числа...'		
},		
{
	id: 1,				
	author:	'Просто	Вася',				
	text:	'Считаю, что	$ должен стоить 35 рублей!'		
},		
{
	id: 2,				
	author:	'Гость',				
	text:	'Бесплатно.	Скачать. Лучший	сайт - http://localhost:3000'		
} 
];

class App extends React.Component {
	render() {
		return (
			<div className="app">
				Component App! I can show news.
				<News data={my_news}/>
				<Comments />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

export default App;