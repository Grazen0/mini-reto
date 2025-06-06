import type { FormEventHandler } from "react";

const SearchBox = () => {
  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="px-6 py-4 bg-white rounded-xl shadow-lg">
      <form className="space-x-3 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="¿Qué necesitas hacer?"
          className="border border-neutral-400 bg-neutral-50 rounded-md px-3 py-2 grow"
        />
        <select
          name="priority"
          id="priority"
          className="border border-neutral-400 rounded-md px-3 py-2"
        >
          <option value="low">Baja</option>
          <option value="middle">Media</option>
          <option value="high">Alta</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded-md"
        >
          + Agregar
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
