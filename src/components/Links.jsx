import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {url: '/search', text: '🔎 All', id: 1},
    {url: '/news', text: '📰 News', id: 2},
    {url: '/images', text: '📷 Images', id: 3},
    {url: '/videos', text: '📹 Videos', id: 4},
]

export const Links = () => {
    return ( 
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text, id }) => (
                <NavLink key={id} to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 ">
                    {text}
                </NavLink>
            ))}
        </div>
     );
}