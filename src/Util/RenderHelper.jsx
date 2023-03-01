import { getIcon, getViewBox } from '../Assets/icons.jsx';

export const fixedIcons = (i, classname) => {
	return (
		<svg className={classname} viewBox={getViewBox(i)} xmlns="http://www.w3.org/2000/svg">
		{getIcon(i)}
		</svg>
	)	
}
