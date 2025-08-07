import { useEffect, useRef, useState } from "react";

export default function CustomDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`dropdown-button ${open ? "open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {value || label}
      </button>

      {open && (
        <ul className="dropdown-list" role="listbox">
          <li className="dropdown-heading">{label}</li>
          <li
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            Alle
          </li>
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
