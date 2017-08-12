import News from './News';

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
				<h3>News</h3>
				<News data={my_news}/>
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

export default App;