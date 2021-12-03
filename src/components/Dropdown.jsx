import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';

export default function DropdownMenu({ items, path }) {
  const [open, setOpen] = useState(false);
  const target = useRef(null);

  const outerClick = useCallback((e) => {
    if (target.current && !target.current.parentNode.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('click', outerClick, true);
    } else {
      document.removeEventListener('click', outerClick, true);
    }
    return () => {
      document.removeEventListener('click', outerClick, true);
    };
  }, [open, outerClick]);

  const menuItems = items.map((item, index) => {
    return (
      <div
        className="menu__item"
        key={item.id + '-' + index}
        onClick={() => {
          item.onClick();
          setOpen(false);
        }}
      >
        {item.display}
      </div>
    );
  });

  return (
    <div className="menu">
      <div ref={target} className="menu__items" style={{ display: open ? 'block' : 'none' }}>
        <div className="menu__items-wrapper">
          {menuItems}
        </div>
      </div>
      <Icon
        className={`icon icon-menu ${open ? 'icon-menu-active' : ''}`}
        path={!path ? mdiDotsHorizontal : path}
        size="30px"
        color="#A9A9A9"
        onClick={() => setOpen((open) => !open)}
      />
    </div>
  );
}
