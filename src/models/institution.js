const products = {
    label: "Lembaga",
    endpoints: {
        lookup: "/gallery/lookup",
        list: "/gallery/list",
        create: "/gallery/create",
        update: "/gallery/update",
        delete: "/gallery/delete",
        detail: "/gallery/show",
    },

    url: {
        list: "/admin/lembaga/",
        create: "/admin/lembaga/tambah",
        update: "/admin/lembaga/edit",
        delete: "/delete",
        detail: "/admin/lembaga/detail",
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
            label: "Nama Lembaga",
            type: "text",
            placeholder: "Masukkan Nama Lembaga",
            required: true,
        },
        {
            key: "slug",
            label: "Slug",
            type: "text",
            placeholder: "Masukkan Slug Lembaga",
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
            label: "Deskripsi Lembaga",
            type: "texteditor",
            placeholder: "Masukkan Deskripsi Lembaga",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama Lembaga",
            type: "text",
            placeholder: "Masukkan Nama Lembaga",
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
        },
        {
            key: "content",
            label: "Deskripsi Lembaga",
            type: "texteditor",
            placeholder: "Masukkan Deskripsi Lembaga",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Lembaga",
            type: "text",
            placeholder: "Masukkan Nama Lembaga",
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
            label: "Nama Lembaga",
            type: "text",
            placeholder: "Masukkan Nama Lembaga",
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
