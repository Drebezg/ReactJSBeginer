import News from './News';

const my_news = [		
{
	id: 0,				
	author:	'Саша Печкин',				
	text:	'В	четверг,	четвертого	числа...',
	bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'		
},		
{
	id: 1,				
	author:	'Просто	Вася',				
	text:	'Считаю, что	$ должен стоить 35 рублей!',
	bigText: 'Vel qui laboriosam ipsa labore deleniti quasi amet alias tenetur, nostrum fugiat doloremque repellendus sed nihil rem reiciendis?'		
},		
{
	id: 2,				
	author:	'Гость',				
	text:	'Бесплатно.	Скачать. Лучший	сайт - http://localhost:3000',
	bigText: 'Adipisci suscipit culpa neque necessitatibus aliquam, accusamus, dicta iure nobis laudantium eum, numquam minus fuga, saepe dolore sit laborum blanditiis assumenda modi!'		
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