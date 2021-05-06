import { usePopover } from '@/hooks/usePopover'

const RootPage = () => {
	const { showPopover, hidePopover } = usePopover()

	const openPopover = () => {
		showPopover({ message: 'Успешно!', variant: 'success' })
	}
	return (
		<div className='container'>
			<h1>
				Home Page
			</h1>
			<button onClick={openPopover}>Show</button>
			<button onClick={hidePopover}>hide</button>
		</div>
	);
};

export default RootPage;
