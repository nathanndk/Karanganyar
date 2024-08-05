const products = {
    label: "Divisi",
    endpoints: {
        lookup: "/hero-section/lookup",
        list: "/hero-section/list",
        create: "/hero-section/create",
        update: "/hero-section/update",
        delete: "/hero-section/delete",
        detail: "/hero-section/show",
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

    createConfig: [
        {
            key: "title",
            label: "Judul",
            type: "text",
            placeholder: "Masukkan Judul",
        },
        {
            key: "subtitle",
            label: "Sub Judul",
            type: "text",
            placeholder: "Masukkan Sub Judul",
        },
    ],

    updateConfig: [
        {
            key: "title",
            label: "Judul",
            type: "text",
            placeholder: "Masukkan Judul",
            required: true,
        },
        {
            key: "subtitle",
            label: "Sub Judul",
            type: "text",
            placeholder: "Masukkan Sub Judul",
            required: true,
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Gambar",
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
