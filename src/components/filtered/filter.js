import { clear } from "@testing-library/user-event/dist/clear";
import Buttons from "../btns/Btns";
export function Filtered({ getState, setgender, setactivPage, setName }) {
  const statusData = ["alive", "dead", "unknown"];
  const genderData = ["male", "female", "Unknown "];
  function clear() {
    getState("");
    setgender("");
    setactivPage(1);
    setName("");
  }
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='m-0'>Filter</h3>
        <p
          style={{ cursor: "pointer" }}
          onClick={clear}
          className='text-decoration-underline text-primary'
        >
          Clear
        </p>
      </div>

      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 classNameName='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Filter by status
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              {statusData.map((item, index) => (
                <Buttons
                  text={item}
                  setState={getState}
                  name='statys'
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed mt-2 mb-2'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Filter by species
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'></div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed mb-5'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Filter by gender
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body '>
              {genderData.map((item, index) => (
                <Buttons
                  name='gender'
                  setState={setgender}
                  text={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
