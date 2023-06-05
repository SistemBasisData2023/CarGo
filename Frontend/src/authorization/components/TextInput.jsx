const TextInput = (props) => {
  return (
    <div>
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input type={props.type} placeholder={props.placeholder} onChange={props.handle} value={props.value} className="input input-bordered w-full max-w-xs" />
    </div>
  )
}

export default TextInput;