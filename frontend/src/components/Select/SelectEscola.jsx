
export const SelectEscola = () => {
    return(
        <>
        <select
        id="bairro"
        name="Bairro"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      >
        <option>  </option>
        <option value="Pública">Pública</option>
        <option value="Particular">Particular</option>

      </select>
        </>
    )
}