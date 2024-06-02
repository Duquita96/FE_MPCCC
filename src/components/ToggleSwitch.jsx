// eslint-disable-next-line react/prop-types
export const ToggleSwitch = ({ label, onChange, isChecked }) => {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='checkbox'
        name={label}
        id={label}
        checked={isChecked}
        onChange={onChange}
      />
      <label className='label' htmlFor={label}>
        <span className='inner' />
        <span className='switch' />
      </label>
    </div>
  );
};
