interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: { value: string; label: string }[];
}

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rows,
  options,
}: FormFieldProps) {
  const baseClass =
    "rounded-md border border-outline-variant bg-surface-container-low px-4 py-3 text-body-medium transition-all duration-200 focus:border-primary focus:bg-surface-container-lowest focus:scale-[1.01] focus:shadow-[0_0_0_3px_hsla(210,82%,27%,0.1)] focus:outline-none";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-body-medium font-medium">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows || 5}
          placeholder={placeholder}
          className={`${baseClass} min-h-[130px] resize-y`}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          className={baseClass}
        >
          <option value="">{placeholder || `Select ${label.toLowerCase()}...`}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}
