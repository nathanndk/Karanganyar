const products = {
    label: "Divisi",
    endpoints: {
        lookup: "about/lookup",
        list: "about/list",
        create: "about/create",
        update: "about/update",
        delete: "about/delete",
        detail: "about/show",
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
            key: "short_description",
            label: "Deskripsi Singkat",
            type: "textarea",
            placeholder: "Masukkan Sub Judul",
            required: true,
        },
        {
            key: "description",
            label: "Deskripsi Utama",
            type: "textarea",
            placeholder: "Masukkan Deskripsi",
            required: true,
        },
        {
            key: "url_video",
            label: "Link Video",
            type: "text",
            placeholder: "Masukkan Link Youtube",
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
