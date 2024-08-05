const products = {
    label: "Artikel",
    endpoints: {
        lookup: "/articles/lookup",
        list: "/articles/list",
        create: "/articles/create",
        update: "/articles/update",
        delete: "/articles/delete",
        detail: "/articles/show",
    },

    url: {
        list: "/admin/artikel/",
        create: "/admin/artikel/tambah",
        update: "/admin/artikel/edit",
        delete: "/delete",
        detail: "/admin/artikel/detail",
    },

    actionConfig: {
        create: true,
        update: true,
        delete: true,
        detail: true,
    },

    createConfig: [
        {
            key: "name",
            label: "Judul artikel",
            type: "text",
            placeholder: "Masukkan Nama artikel",
            required: true,
        },
        {
            key: "slug",
            label: "Slug",
            type: "text",
            placeholder: "Masukkan Slug artikel",
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
            label: "Konten artikel",
            type: "texteditor",
            placeholder: "Masukkan Konten artikel",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama artikel",
            type: "text",
            placeholder: "Masukkan Nama artikel",
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama artikel",
            type: "text",
            placeholder: "Masukkan Nama artikel",
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama artikel",
            type: "text",
            placeholder: "Masukkan Nama artikel",
        },
        // {
        //     key: "image",
        //     label: "Gambar Thumbnail",
        //     type: "image",
        //     placeholder: "Masukkan Gambar Thumbnail",
        // },
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
