import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/user.svg';

function Header({ title, children }) {
  return (
    <>
      <header className="m-b bg-white round-top">
        <div className="center max-width-90 flex-row">
          <h1 className="app-title">
            {title}
          </h1>
          <div className="cat-title">
            <span className="text-grey">Books</span>
          </div>
          <div className="categories text-center">
            {children}
          </div>
          <img className="user-img" src={logo} alt="logo" />
        </div>
      </header>

    </>
  );
}

Header.defaultProps = {
  title: 'Bookstore CMS',
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,

};

export default Header;
