import React from 'react';
import './Post.scss';

function Post(props) {
	return (
		<div className="Post">
			<div className="PostContainer">
				<div>
					<img src="https://twitchinfo.ru/wp-content/uploads/2020/08/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BF%D0%BE-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B4%D0%BB%D1%8F-Youtube-VK-INSTAGRAMM-TIKTOK-TWITCH-0-12-03-920-1024x576.jpg" alt="avatar" />
				</div>
				<div className='text'>
					{props.message}
				</div>
			</div>
			<div className='like'>
				<span>like  {props.likesCount}</span>
			</div>
		</div>

	)
}

export default Post;