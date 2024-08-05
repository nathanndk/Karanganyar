const products = {
  label: "Banner Tentang Kami",
  endpoints: {
    lookup: "/about-carousel/lookup",
    list: "/about-carousel/list",
    create: "/about-carousel/create",
    update: "/about-carousel/update",
    delete: "/about-carousel/delete",
    detail: "/about-carousel/show",
  },

  url: {
    list: "/admin/about-carousel",
    create: "/admin/about-carousel/tambah",
    update: "/admin/about-carousel/edit",
    delete: "/delete",
    detail: "/admin/about-carousel/detail",
  },

  actionConfig: {
    create: true,
    update: true,
    delete: true,
    detail: true,
  },

  createConfig: [
    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
      required: true,
    },
  ],

  updateConfig: [
    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
      required: true,
    },
  ],

  listConfig: [
    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
    },
  ],

  detailConfig: [
    {
      key: "image",
      label: "Foto",
      type: "image",
      placeholder: "Masukkan Foto",
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

export default products;
