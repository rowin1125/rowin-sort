export const getRandomColor = () => {
  var r, g, b, rg, gb, rb;
  var range = 255;
  var sep = range / 4;

  do {
    r = Math.floor(Math.random() * range);
    g = Math.floor(Math.random() * range);
    b = Math.floor(Math.random() * range);

    rg = Math.abs(r - g);
    gb = Math.abs(g - b);
    rb = Math.abs(r - b);
  } while (rg < sep || gb < sep || rb < sep);

  function rgbtohex(rgb) {
    var first, second;

    first = Math.floor(rgb / 16);
    second = rgb % 16;

    first = first.toString(16);
    second = second.toString(16);

    var rgbtohex = first + second;

    return rgbtohex;
  }

  var r_str = rgbtohex(r),
    g_str = rgbtohex(g),
    b_str = rgbtohex(b);

  var final = '#' + r_str + g_str + b_str;

  return final;
};
