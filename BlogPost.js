export default function BlogPost({
  title,
  content
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "blog-post"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, content));
}