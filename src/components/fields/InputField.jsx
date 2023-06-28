export const InputField = ({ placeholder }) => (
<input
  type="text"
  className="w-full rounded px-3 py-4 outline-none "
  placeholder={placeholder}
  style={{
    fontSize: '16px',
    color: '#333',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }}
/>

);

