import React from 'react'
import './FormsControls.scss'

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className='form'>
			<div >
				<textarea className={hasError && 'erorBorder'} {...input} {...props} />
			</div>
			<div>
				{hasError && <span className='someError'>{meta.error}</span>}
			</div>
		</div>
	)
}

export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className='form'>
			<div >
				<input className={hasError && 'erorBorder'} {...input} {...props} />
			</div>
			<div>
				{hasError && <span className='someError'>{meta.error}</span>}
			</div>
		</div>
	)
}