function format_result(result_string) {
  const array_string = result_string.split("\n");
  let inner = "";
  let first = true;
  for (let one_string of array_string) {
    if (first) {
      inner += `<h3 class="statement_header">${one_string}</h3>`;
      first = false;
    } else {
      inner += `<p class="statement_lines" >${one_string}</p>`;
    }
  }
  return inner;
}

export default format_result;
