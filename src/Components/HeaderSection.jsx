import tom from '../assets/tom.png'
export default function Header() {
  return (
    <>

    <div className="headerSectionContainer">
        <div className='headerSection'> 
            <img className='tomImage' src={tom} alt='Tom' />
            <h1 className="header">
                Hi, I&apos;m Tom.
            </h1>
            <p className='lowerHeader'>Frontend Web Developer - <span className='accentColor'>Brighton</span>, UK</p>
            <div className='socialsContainer'>
              <a href="https://github.com/GrandpaTomcode" target='_blank' rel="noreferrer">
          <svg className='socialIcon' xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                <g clipPath="url(#clip0_8_3)">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.8146 0C7.96361 0 0 7.84966 0 17.5608C0 25.3234 5.10256 31.8943 12.1812 34.2199C13.0662 34.3947 13.3903 33.842 13.3903 33.3771C13.3903 32.97 13.3612 31.5746 13.3612 30.1206C8.40557 31.1674 7.3736 28.0272 7.3736 28.0272C6.57721 25.992 5.3972 25.469 5.3972 25.469C3.77523 24.3932 5.51534 24.3932 5.51534 24.3932C7.31453 24.5095 8.25861 26.1958 8.25861 26.1958C9.85104 28.8704 12.4171 28.1146 13.4494 27.6494C13.5967 26.5155 14.069 25.7305 14.5704 25.2945C10.6179 24.8874 6.45942 23.3756 6.45942 16.6302C6.45942 14.7113 7.16685 13.1414 8.28778 11.9204C8.11093 11.4844 7.49139 9.68149 8.465 7.26843C8.465 7.26843 9.96919 6.80316 13.3608 9.071C14.8129 8.6866 16.3104 8.49106 17.8146 8.48941C19.3188 8.48941 20.8522 8.69315 22.2681 9.071C25.6601 6.80316 27.1643 7.26843 27.1643 7.26843C28.1379 9.68149 27.518 11.4844 27.3412 11.9204C28.4916 13.1414 29.1699 14.7113 29.1699 16.6302C29.1699 23.3756 25.0114 24.8581 21.0294 25.2945C21.6785 25.8468 22.2386 26.8933 22.2386 28.5507C22.2386 30.9056 22.2094 32.7955 22.2094 33.3768C22.2094 33.842 22.534 34.3947 23.4186 34.2203C30.4972 31.8939 35.5998 25.3234 35.5998 17.5608C35.6289 7.84966 27.6362 0 17.8146 0Z" fill="#FC8472"/>
                </g>
                <defs>
                <clipPath id="clip0_8_3">
                <rect width="35.7358" height="34.2531" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            </a>
            <svg className='socialIcon' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                  <g clipPath="url(#clip0_8_5)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.80857 34.2531H30.4686C32.572 34.2531 34.2772 32.5491 34.2772 30.4472V3.8059C34.2772 1.70396 32.572 0 30.4686 0H3.80857C1.70516 0 0 1.70396 0 3.8059V30.4472C0 32.5491 1.70516 34.2531 3.80857 34.2531Z" fill="#FC8472"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.5164 29.4957H24.4299V20.8382C24.4299 18.4646 23.5274 17.1382 21.6473 17.1382C19.6021 17.1382 18.5335 18.5185 18.5335 20.8382V29.4957H13.6315V13.0034H18.5335V15.2249C18.5335 15.2249 20.0074 12.4996 23.5096 12.4996C27.0102 12.4996 29.5164 14.6358 29.5164 19.0538V29.4957ZM7.78346 10.8439C6.11373 10.8439 4.76071 9.48123 4.76071 7.80062C4.76071 6.12001 6.11373 4.75732 7.78346 4.75732C9.45318 4.75732 10.8054 6.12001 10.8054 7.80062C10.8054 9.48123 9.45318 10.8439 7.78346 10.8439ZM5.25228 29.4957H10.3638V13.0034H5.25228V29.4957Z" fill="#545051"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_8_5">
                  <rect width="34.2772" height="34.2531" fill="white"/>
                  </clipPath>
                  </defs>
            </svg>
          </div>
        </div>
        <div className='scrollContainer'>
          <p>Scroll...</p>
          <svg  xmlns="http://www.w3.org/2000/svg" width='35' height='35' viewBox="0 -960 960 960"><path className='scrollArrow' fill='#fff'  d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </div> 
    </div>
     
    </>
  );
}
