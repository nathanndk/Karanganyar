const products = {
    label: "Potensi Desa",
    endpoints: {
        lookup: "/gallery/lookup",
        list: "/gallery/list",
        create: "/gallery/create",
        update: "/gallery/update",
        delete: "/gallery/delete",
        detail: "/gallery/show",
    },

    url: {
        list: "/admin/potensi-desa/",
        create: "/admin/potensi-desa/tambah",
        update: "/admin/potensi-desa/edit",
        delete: "/delete",
        detail: "/admin/potensi-desa/detail",
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
            label: "Judul Potensi Desa",
            type: "text",
            placeholder: "Masukkan Nama Potensi Desa",
            required: true,
        },
        {
            key: "slug",
            label: "Slug",
            type: "text",
            placeholder: "Masukkan Slug Potensi Desa",
            required: true,
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "file",
            placeholder: "Masukkan Gambar Thumbnail",
            required: true,
        },
        {
            key: "content",
            label: "Konten Potensi Desa",
            type: "texteditor",
            placeholder: "Masukkan Konten Potensi Desa",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama Potensi Desa",
            type: "text",
            placeholder: "Masukkan Nama Potensi Desa",
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
        },
        {
            key: "content",
            label: "Deskripsi Potensi Desa",
            type: "texteditor",
            placeholder: "Masukkan Deskripsi Potensi Desa",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Potensi Desa",
            type: "text",
            placeholder: "Masukkan Nama Potensi Desa",
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
            label: "Nama Potensi Desa",
            type: "text",
            placeholder: "Masukkan Nama Potensi Desa",
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
