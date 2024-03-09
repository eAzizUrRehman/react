function customRender(element, container) {
  // v.1.0.0
  //   const domElement = document.createElement(element.type);
  //   domElement.innerHTML = element.children;
  //   domElement.setAttribute("href", element.props.href);
  //   domElement.setAttribute("target", element.props.target);
  //   container.appendChild(domElement);

  // v.2.0.0
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  for (const prop in element.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

const newElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.getElementById("root");

customRender(newElement, mainContainer);
