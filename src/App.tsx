// import viteLogo from "/vite.svg";
import { useState } from 'react';
import jsonDial from './dial.json';
import jsonCategory from './category.json';
import './App.css';

type Dial = {
	id: string;
	titulo: string;
	link: string;
	aba: string;
};
type Category = {
	id: string;
	titulo: string;
	ordem: string;
};

export default function App() {
	const [tab, setTab] = useState('0');

	const changeTab = (val: string) => {
		setTab(val);
		console.log(val, tab);
	};

	// console.log(jsonDial.map);

	const listCategory = jsonCategory.map((cat: Category) => {
		return (
			<div key={cat.id}>
				<button
					onClick={() => changeTab(cat.id)}
					type='button'
					className={`mx-1 rounded ${cat.id == tab ? 'bg-rose-500' : 'bg-fuchsia-600'} px-8 py-2 text-white shadow-sm hover:bg-fuchsia-800 border-none`}
				>
					{cat.titulo}
				</button>
			</div>
		);
	});

	const listDial = jsonDial.map((dial: Dial) => {
		const image = `/upload/${dial.id}.jpg`;
		const imageDefault = `/upload/vazio.jpg`;
		return (
			<div
				key={dial.id}
				className={`rounded-md bg-cover bg-center aba-${dial.aba} ${dial.aba == tab ? 'show' : 'hidden'}`}
				style={{ backgroundImage: `url(${imageDefault})` }}
			>
				<a href={`https://${dial.link}`}>
					<div className={'rounded px-8 py-2 shadow-sm h-32 bg-cover bg-center bg-no-repeat relative '} style={{ backgroundImage: `url(${image})` }}>
						<div className='text-black px-2 bg-trans absolute inset-x-0 bottom-0 rounded-b-md '>
							{dial.id} -{dial.titulo}
						</div>
					</div>
				</a>
			</div>
		);
	});

	return (
		<div>
			<div className='container mx-auto'>
				<div className='py-4 flex'>
					<div>
						<button onClick={() => changeTab('0')} type='button' className={`mx-1 rounded ${"0" == tab ? 'bg-rose-500' : 'bg-fuchsia-600'} px-8 py-2 text-white shadow-sm hover:bg-fuchsia-800 border-none`}>
							Localhost
						</button>
					</div>
					{listCategory}
					<div>
						<button type='button' className='mx-1 rounded bg-fuchsia-600 px-4 py-2 text-white shadow-sm hover:bg-fuchsia-800 border-none'>
							+
						</button>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>{listDial}</div>
			</div>
		</div>
	);
}

