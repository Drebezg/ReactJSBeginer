import News from './News';
import Add from './Add';
import PropTypes from 'prop-types';

window.ee = new EventEmitter();
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
	constructor(props) {
		super(props);
		this.state = {
			news: my_news		
		};
	}
	componentDidMount() {
		let self = this;
		window.ee.addListener('News.add', (item) => {
			let nextNews = item.concat(self.state.news);
			self.setState({news: nextNews});
		});
	}
	componentWillUnmount() {
		window.ee.removeListener('News.add');
	}
	render() {
		console.log('render');
		return (
			<div className="app">
				<Add />
				<h3>News</h3>
				<News data={this.state.news}/>
			</div>
		);
	}
};


ReactDOM.render(
	<App />,
	document.getElementById('root')
);

export default App;