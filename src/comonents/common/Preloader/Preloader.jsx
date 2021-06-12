import React from 'react';
import preloader from '../../img/Fidget-spinner.gif';


let Preloader = (props) => {
	return (
		<div>
			<img alt='loading' src={preloader} />
		</div>
	)
}

export default Preloader