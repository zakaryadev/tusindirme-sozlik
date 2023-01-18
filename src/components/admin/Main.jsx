import search from "../../assets/icons/search.svg";

const Main = () => {
  return (
    <main className="main">
      <div className="main-header">
        <button className="main-header btn btn-primary">Button</button>
        <div className="search-bar">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0258 12.8475L17.595 16.4158L16.4158 17.595L12.8475 14.0258C11.5197 15.0902 9.86829 15.6691 8.16663 15.6667C4.02663 15.6667 0.666626 12.3067 0.666626 8.16666C0.666626 4.02666 4.02663 0.666656 8.16663 0.666656C12.3066 0.666656 15.6666 4.02666 15.6666 8.16666C15.669 9.86832 15.0901 11.5198 14.0258 12.8475ZM12.3541 12.2292C13.4117 11.1416 14.0023 9.68368 14 8.16666C14 4.94332 11.3891 2.33332 8.16663 2.33332C4.94329 2.33332 2.33329 4.94332 2.33329 8.16666C2.33329 11.3892 4.94329 14 8.16663 14C9.68365 14.0024 11.1415 13.4118 12.2291 12.3542L12.3541 12.2292Z"
              fill="#8F9092"
            />
          </svg>
          <input type="text" placeholder="Search words" />
        </div>
        <button className="main-header btn">Admin</button>
      </div>
    </main>
  );
};

export default Main;
