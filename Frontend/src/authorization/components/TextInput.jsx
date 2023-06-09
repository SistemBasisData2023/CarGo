const TextInput = (props) => {
  return (
    <div className="h-[70px]">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input required={props.required} type={props.type} placeholder={props.placeholder} onChange={props.handle} value={props.value} className="input input-bordered w-full max-w-xs h-[40px]" />
    </div>
  )
}

export default TextInput;