function Buttons({ text, index, name, setState }) {
  return (
    <>
      <input
        onClick={() => setState(text)}
        type='radio'
        name={name}
        className='btn-check'
        id={`${name}-${index}`}
        autoComplete='off'
      />
      <label className='btn btn-outline-primary' htmlFor={`${name}-${index}`}>
        {text}
      </label>
      <br />
      <br />
    </>
  );
}

export default Buttons;
