import React, { useContext } from "react";
import { ThemeContext } from '../../Context/ThemeContext';

const PageLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page-content-wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <header className="header" >HEADER</header>
      <main className="main">TOGGLING THEME USING USECONTEXT</main>
      <footer className="footer">FOOTER</footer>
    </div>
  );
};

export default PageLayout;
