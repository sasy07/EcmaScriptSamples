let text1 = 'Lorem ipsum is placeholder text commonly used in the graphic';
let text2 =
  'print, and publishing industries for previewing layouts and visual mockups.';
let text3 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const lines = [text1, text2, text3];

function buildHtml(tags, lines) {
  // console.log(tags);
  // console.log(lines);
  const newHtml = lines.map(function (line) {
    return `${tags[0]}${line}${tags[1]}`;
  });
  return newHtml;
}

const result = buildHtml`<li>${lines}</li>`;
//const result = buildHtml`<li>${lines[0]}</li>`;

console.log(result);
