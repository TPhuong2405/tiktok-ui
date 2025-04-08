const { override, useBabelRc } = require("customize-cra");

console.log("Loading custom overrides..."); // Thêm dòng này

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
