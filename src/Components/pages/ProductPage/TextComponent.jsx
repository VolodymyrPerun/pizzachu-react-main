import React from 'react'
import i18next from 'i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//////////////////////////////////////////////////

export const TextComponent = ({
  uom,
  icon,
  value,
  label,
  style,
  imgSrc,
  imgStyle,
  spanStyle,
  iconStyle,
  className,
  simpleLabel,
  imgClassName,
}) => (
  <p style={style} className={className}>
    {
      !!icon &&
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: '#EE7178',
          marginRight: '7px',
          ...iconStyle
        }}
      />
    }
    {
      !!imgSrc &&
      <img
        alt='icon'
        src={imgSrc}
        className={imgClassName}
        style={{
          top: '2px',
          width: '20px',
          height: '20px',
          color: '#EE7178',
          marginRight: '7px',
          position: 'relative',
          ...imgStyle
        }}
      />
    }
    {!!label && `${i18next.t(label)}: `}
    {!!simpleLabel && `${i18next.t(simpleLabel)} `}
    <span style={spanStyle}>{value}</span>
    {!!uom && ` ${i18next.t(uom)}`}
  </p>
);

