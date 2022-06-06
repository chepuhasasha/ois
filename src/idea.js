const data = {
  object_type: "node",
  title: "Node",
  subtitle: "node subtitle",
  status: {
    color: "red",
    ranking: 0,
  },
  childs: [
    {
      object_type: "node",
      title: "Node",
      subtitle: "node subtitle",
      status: {
        color: "red",
        ranking: 0,
      },
      childs: [],
    },
    {
      object_type: "node",
      title: "Node",
      subtitle: "node subtitle",
      status: {
        color: "red",
        ranking: 0,
      },
      childs: [],
    },
  ],
};

const muup = new Muup.App();

const node = {
  model: {
    title: "Node",
    subtitle: "node subtitle",
    status: {
      color: "red",
      ranking: 0,
    },
  },
  where: {
    object_type: "node",
  },
  childsKey: "childs",
  widgets: [
    muup.widget("Title", { title: "title", subtitle: "subtitle" }),
    muup.widget("Status", { color: "status.color" }),
  ],
};

const status = {
  props: {
    color: {
      type: String,
      default: "red",
    },
  },
  setup() {
    console.log(this.props.color);
  },
};

muup.useComponent("Node", node);
muup.useWidget("Status", node);

const tree = muup.tree(data);
console.log(tree);

muup.mount("#app");

setInterval(() => {
  // muup.nodeUpdate("234", { title: `Node ${Math.random()}` });
}, 1000);
