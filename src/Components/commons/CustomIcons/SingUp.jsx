import React from 'react'
import Icon from '@ant-design/icons'
//////////////////////////////////////////////////

const SingUpSvg = () => (
  <svg className="svg" version="1.1" width="18" height="18" viewBox="0 0 18 18"
       xmlns="http://www.w3.org/2000/svg">
    <g>
      <g>
        <path className="fill-hover" fill="#f2f2f2"
              d="m9.1351 1.2595c1.9461 0 3.5384 1.6004 3.5384 3.5564 0 1.956-1.5923 3.5564-3.5384 3.5564-1.9461 0-3.5384-1.6004-3.5384-3.5564s1.5922-3.5564 3.5384-3.5564zm0 8.3872c2.6538 0 4.8063-2.1635 4.8063-4.8308 0-2.6673-2.1525-4.816-4.8063-4.816-2.6538 0-4.8063 2.1635-4.8063 4.816s2.1525 4.8308 4.8063 4.8308z"></path>
      </g>
      <g>
        <path className="fill-hover" fill="#f2f2f2"
              d="m6.0443 11.719h5.9112c2.4236 0 4.4187 1.8079 4.729 4.1491h-15.369c0.31033-2.3264 2.3054-4.1491 4.729-4.1491zm-5.4088 5.4236h16.729c0.35467 0 0.63545-0.28156 0.63545-0.63718 0-3.3341-2.7044-6.0607-6.0443-6.0607h-5.9112c-3.3251 0-6.0443 2.7117-6.0443 6.0607 0 0.35562 0.28078 0.63718 0.63545 0.63718z"></path>
      </g>
    </g>
  </svg>
)

const SingUpIcon = props => {
  return (
    <div>
      <Icon component={SingUpSvg} {...props} />
    </div>
  )
}

export default SingUpIcon
