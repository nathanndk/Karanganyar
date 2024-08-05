const models = {
  label: "Quotes",
  endpoints: {
    lookup: "/quotes/lookup",
    list: "/quotes/list",
    create: "/quotes/create",
    update: "/quotes/update",
    delete: "/quotes/delete",
    detail: "/quotes/show",
  },

  url: {
    list: "/",
    create: "/admin/quotes/tambah",
    update: "/admin/quotes/edit",
    delete: "/delete",
    detail: "/admin/quotes/detail",
  },

  createConfig: [
    {
      key: "first_quote",
      label: "quotes 1",
      type: "text",
      placeholder: "Masukkan quotes",
    },
    {
      key: "second_quote",
      label: "quotes 2",
      type: "text",
      placeholder: "Masukkan quotes",
    },
  ],

  updateConfig: [
    {
      key: "first_quote",
      label: "quotes 1",
      type: "text",
      placeholder: "Masukkan quotes",
      required: true,
    },
    {
      key: "second_quote",
      label: "quotes 2",
      type: "text",
      placeholder: "Masukkan quotes",
      required: true,
    },
  ],

  listConfig: [
    {
      key: "first_quote",
      label: "quotes 1",
      type: "text",
      placeholder: "Masukkan quotes",
    },
    {
      key: "second_quote",
      label: "quotes 2",
      type: "text",
      placeholder: "Masukkan quotes",
    },
  ],

  detailConfig: [
    {
      key: "first_quote",
      label: "quotes 1",
      type: "text",
      placeholder: "Masukkan quotes",
    },
    {
      key: "second_quote",
      label: "quotes 2",
      type: "text",
      placeholder: "Masukkan quotes",
    },
  ],

  beforeInsert(data) {
    return data;
  },

  afterInsert(data) {
    return data;
  },

  beforeUpdate(data) {
    return data;
  },

  afterUpdate(data) {
    return data;
  },
};

export default models;
