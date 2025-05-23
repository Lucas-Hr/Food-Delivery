import React from 'react'

function InstagramSvg({color ,size}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.3333 14.1667C29.714 14.1667 30.8333 13.0475 30.8333 11.6667C30.8333 10.286 29.714 9.16675 28.3333 9.16675C26.9526 9.16675 25.8333 10.286 25.8333 11.6667C25.8333 13.0475 26.9526 14.1667 28.3333 14.1667Z" fill={color}/>
        <path d="M26.6667 5C31.2667 5 35 8.73333 35 13.3333V26.6667C35 31.2667 31.2667 35 26.6667 35H13.3333C8.73333 35 5 31.2667 5 26.6667V13.3333C5 8.73333 8.73333 5 13.3333 5H20H26.6667Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 13.3333C23.6833 13.3333 26.6667 16.3166 26.6667 19.9999C26.6667 23.6833 23.6833 26.6666 20 26.6666C16.3167 26.6666 13.3333 23.6833 13.3333 19.9999C13.3333 16.3166 16.3167 13.3333 20 13.3333Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default InstagramSvg