export default function NavBar() {
  return (
    <>
      <div className="NavBarContainer">
        <h1 className="NavBarTitle">
          GrandpaTom<span className="accentColor">Codes</span>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="NavBarMenu"
          width="25"
          height="20"
          viewBox="0 0 30 26"
          fill="none"
        >
          <path
            d="M0 23.6628C0 24.8508 0.963108 25.814 2.15116 25.814H27.8488C29.0369 25.814 30 24.8508 30 23.6628C30 22.4747 29.0369 21.5116 27.8488 21.5116H2.15116C0.963108 21.5116 0 22.4747 0 23.6628ZM0 12.907C0 14.095 0.963108 15.0581 2.15116 15.0581H27.8488C29.0369 15.0581 30 14.095 30 12.907C30 11.7189 29.0369 10.7558 27.8488 10.7558H2.15116C0.963108 10.7558 0 11.7189 0 12.907ZM2.15116 0C0.963108 0 0 0.963109 0 2.15116C0 3.33922 0.963108 4.30233 2.15116 4.30233H27.8488C29.0369 4.30233 30 3.33922 30 2.15116C30 0.963109 29.0369 0 27.8488 0H2.15116Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}
