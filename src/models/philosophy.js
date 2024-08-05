const models = {
  label: "Filosofi",
  endpoints: {
    lookup: "/philosophy/lookup",
    list: "/philosophy/list",
    create: "/philosophy/create",
    update: "/philosophy/update",
    delete: "/philosophy/delete",
    detail: "/philosophy/show",
  },

  url: {
    list: "/",
    create: "/admin/filosofi/tambah",
    update: "/admin/filosofi/edit",
    delete: "/delete",
    detail: "/admin/filosofi/detail",
  },

  createConfig: [
    {
      key: "name",
      label: "Filosofi",
      type: "textarea",
      placeholder: "Masukkan Filosofi",
    },

    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
    },
    {
      key: "description",
      label: "Deskripsi",
      type: "textarea",
      placeholder: "Masukkan Deskripsi",
    },
  ],

  updateConfig: [
    {
      key: "name",
      label: "Filosofi",
      type: "text",
      placeholder: "Masukkan Filosofi",
      required: true,
    },

    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
      required: true,
    },
    {
      key: "description",
      label: "Deskripsi",
      type: "text",
      placeholder: "Masukkan Deskripsi",
      required: true,
    },
  ],

  listConfig: [
    {
      key: "name",
      label: "Filosofi",
      type: "text",
      placeholder: "Masukkan Filosofi",
    },

    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
    },
    {
      key: "description",
      label: "Deskripsi",
      type: "text",
      placeholder: "Masukkan Deskripsi",
    },
  ],

  detailConfig: [
    {
      key: "name",
      label: "Filosofi",
      type: "text",
      placeholder: "Masukkan Filosofi",
    },

    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
    },
    {
      key: "description",
      label: "Deskripsi",
      type: "text",
      placeholder: "Masukkan Deskripsi",
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
