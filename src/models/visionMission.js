const products = {
    label: "visi dan Misi",
    endpoints: {
        lookup: "/content/lookup",
        list: "/content/list",
        create: "/content/create",
        update: "/content/update",
        delete: "/content/delete",
        detail: "/content/show",
    },

    url: {
        list: "/",
        create: "/create",
        update: "/update",
        delete: "/delete",
        detail: "/detail",
    },

    actionConfig: {
        create: true,
        update: true,
        delete: true,
        detail: true,
    },

    createConfig: [],

    updateConfig: [
        {
            key: "name",
            label: "Judul",
            type: "text",
            placeholder: "Masukkan Judul",
            required: true,
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
            required: true,
        },
        {
            key: "content",
            label: "Konten",
            type: "texteditor",
            placeholder: "Masukkan Konten",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Produk",
            type: "text",
        },
        {
            key: "code",
            label: "Kode Produk",
            type: "text",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama Produk",
            type: "text",
        },
        {
            key: "code",
            label: "Kode Produk",
            type: "text",
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
