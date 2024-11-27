
export default function AddFields({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  checked,
}) {
  return (
    <label className="text-left">
      {label}:
      {type === "checkbox" ? (
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
}
