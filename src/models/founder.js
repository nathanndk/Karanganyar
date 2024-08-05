const products = {
    label: "Divisi",
    endpoints: {
        lookup: "/figures/lookup",
        list: "/figures/list",
        create: "/figures/create",
        update: "/figures/update",
        delete: "/figures/delete",
        detail: "/figures/show",
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
            key: "name",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama Founder",
        },
        {
            key: "description",
            label: "Deskripsi",
            type: "area",
            placeholder: "Masukkan Deskripsi",
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto Founder",
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
