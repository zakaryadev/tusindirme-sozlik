import React from "react";
import logo from "../assets/img/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__main">
            <img className="footer__img" src={logo} alt="logo" />
            <div className="footer__content">
              <p className="footer__desc">Sociallıq tarmaqlar</p>
              <ul className="footer__social">
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_52_211)">
                        <path
                          d="M15.402 21V14.034H17.735L18.084 11.326H15.402V9.598C15.402 8.814 15.62 8.279 16.744 8.279H18.178V5.857C17.4838 5.78334 16.7861 5.74762 16.088 5.75C14.021 5.75 12.606 7.012 12.606 9.33V11.326H10.268V14.034H12.606V21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H15.402Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_52_211">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_52_215)">
                        <path
                          d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_52_215">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_52_219)">
                        <path
                          d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_52_219">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3 2.54999C13.54 2.54987 12.8103 2.84811 12.2679 3.38056C11.7256 3.913 11.4139 4.63709 11.4 5.39699L11.372 6.97199C11.3704 7.05656 11.3509 7.13982 11.3148 7.21632C11.2787 7.29281 11.2269 7.36082 11.1627 7.41587C11.0985 7.47092 11.0233 7.51178 10.9422 7.53575C10.8611 7.55973 10.7758 7.56629 10.692 7.55499L9.13102 7.34299C7.07702 7.06299 5.10902 6.11699 3.22102 4.54399C2.62302 7.85399 3.79102 10.147 6.60402 11.916L8.35102 13.014C8.43403 13.0662 8.50299 13.1379 8.55187 13.2228C8.60075 13.3078 8.62806 13.4035 8.63141 13.5015C8.63477 13.5995 8.61407 13.6968 8.57111 13.7849C8.52816 13.873 8.46426 13.9493 8.38502 14.007L6.79302 15.17C7.74002 15.229 8.63902 15.187 9.38502 15.039C14.103 14.097 17.24 10.547 17.24 4.69099C17.24 4.21299 16.228 2.54999 14.3 2.54999ZM9.40002 5.35999C9.41747 4.39604 9.71891 3.45866 10.2666 2.66521C10.8142 1.87177 11.5838 1.25751 12.4789 0.899359C13.3741 0.541207 14.3549 0.455072 15.2988 0.65174C16.2426 0.848407 17.1074 1.31914 17.785 2.00499C18.496 1.99999 19.101 2.17999 20.454 1.35999C20.119 2.99999 19.954 3.71199 19.24 4.69099C19.24 12.333 14.543 16.049 9.77702 17C6.50902 17.652 1.75702 16.581 0.39502 15.159C1.08902 15.105 3.90902 14.802 5.53902 13.609C4.16002 12.7 -1.32898 9.46999 2.27802 0.785992C3.97102 2.76299 5.68802 4.10899 7.42802 4.82299C8.58602 5.29799 8.87002 5.28799 9.40102 5.36099L9.40002 5.35999Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links">
            <ul className="footer__list">
              <li className="footer__list-title">
                <h4>Sózler</h4>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Kún sózi
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Jıl sózi
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Jańa sózler
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Sózler dizimi
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__list-title">
                <h4>Baǵdarlama haqqında</h4>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Baǵdarlama máqseti
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Imkaniyatlar
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Paydalanıw shártleri
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Biz benen baylanısıw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
