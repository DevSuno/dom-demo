window.dom = {
  //创建
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  //增加
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, node) {
    parent.appendChild(node);
  },
  wrap(node, parent) {
    node.before(node, parent);
    node.append(parent, node);
  },

  //删除
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    const arr = [];
    let x = node.firstChild;
    while (x) {
      arr.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return arr;
  },
  //修改
  attr(node, name, value) {
    //重载
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    //适配
    if (arguments === 2) {
      if ("innerHTML" in node) {
        node.innerHTML = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {},
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(evenName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },

  //查找

  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  next(node) {
    let x = node.nextSiblings;
    while (x && x.nodeType === 3) {
      x = x.nextSiblings;
    }
    return x;
  },
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) break;
    }
    return i;
  },
};
