export default function Footer() {
    
    const year = new Date().getFullYear()

  return (
    <>
      <div className="footerContainer">
        <h5>grandpaTom<span className="accentColor">Codes</span> &#169; Copyright - {year} </h5>
      </div>
    </>
  );
}
