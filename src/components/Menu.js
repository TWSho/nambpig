// src/components/Menu.js
import React from 'react';
import './Menu.css'; // CSSファイルをインポート

const menuItems = [
  {
    name: '台式椒鹽豬豬排',
    description: '香脆的椒鹽豬排，台灣風味濃厚。',
    price: 'NT$70',
    image: '/images/image.png',
  },
  {
    name: '日式照燒豬豬排',
    description: '帶有甘甜照燒醬的豬排，日式風格。',
    price: 'NT$80',
    image: '/images/image2.png',
  },
  {
    name: '越式椒麻豬豬排',
    description: '香辣的椒麻風味，越南風格豬排。',
    price: 'NT$80',
    image: '/images/image3.png',
  },
  {
    name: '古早味紅茶',
    description: '傳統古早味紅茶，濃郁香醇。',
    price: 'NT$40',
    image: '/images/image01.png',
  },
  {
    name: '古早味紅茶牛奶',
    description: '經典的紅茶與牛奶的完美搭配。',
    price: 'NT$60',
    image: '/images/image01.png',
  }
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>餐  點</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
