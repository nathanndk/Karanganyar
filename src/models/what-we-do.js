const products = {
    label: "Divisi",
    endpoints: {
        lookup: "/what-we-do/lookup",
        list: "/what-we-do/list",
        create: "/what-we-do/create",
        update: "/what-we-do/update",
        delete: "/what-we-do/delete",
        detail: "/what-we-do/show",
    },

    url: {
        list: "/",
        create: "/create",
        update: "/update",
        delete: "/delete",
        detail: "/detail",
    },

    createConfig: [
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
    ],

    updateConfig: [
        {
            key: "description",
            label: "Deskripsi What We Do",
            type: "textarea",
            placeholder: "Masukkan Deskripsi What We Do",
            required: true,
        },

        {
            key: "image",
            label: "Foto What We Do",
            type: "image",
            placeholder: "Masukkan Foto What we do",
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
