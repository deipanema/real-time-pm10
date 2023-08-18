export default function ControlMenu({ list, value, onChange }) {
  return (
    <select
      aria-label='동네별'
      id='control-menu'
      className='control-menu'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {list.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
