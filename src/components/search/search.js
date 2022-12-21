import {} from "react-router-dom";
import "../search/search.css";
import { debounce, useMemo } from "lodash.debounce";
import { useState, useCallback } from "react";
// const debouncedCallback = debounce(callback, waitTime);
import { DebounceInput } from "react-debounce-input";
export function FilterList({ setName, setactivPage }) {
  return (
    <>
      <DebounceInput
        className='form-input d-flex justify-content-center search-input-Boss  '
        debounceTimeout={1500}
        onChange={(evt) => {
          {
            setName(evt.target.value);
            setactivPage(1);
            // (setName = evt.target.value), (setactivPage = 1);
          }
        }}
        type='Search'
        placeholder='Type a query...'
      />
    </>
  );
}
