const products = {
    label: "Produk Hukum",
    endpoints: {
        lookup: "/law-products/lookup",
        list: "/law-products/list",
        create: "/law-products/create",
        update: "/law-products/update",
        delete: "/law-products/delete",
        detail: "/law-products/show",
    },

    url: {
        list: "/admin/produk-hukum/",
        create: "/admin/produk-hukum/tambah",
        update: "/admin/produk-hukum/edit",
        delete: "/delete",
        detail: "/admin/produk-hukum/detail",
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
            label: "Nama Peraturan",
            type: "text",
            placeholder: "Masukkan Nama Peraturan",
            required: true,
        },
        {
            key: "year",
            label: "Tahun",
            type: "text",
            placeholder: "Masukkan Tahun",
            required: true,
        },
        {
            key: "file",
            label: "File Peraturan",
            type: "file",
            placeholder: "Masukkan File Peraturan",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama Peraturan",
            type: "text",
            placeholder: "Masukkan Nama Peraturan",
            required: true,
        },
        {
            key: "year",
            label: "Tahun",
            type: "text",
            placeholder: "Masukkan Tahun",
            required: true,
        },
        {
            key: "file",
            label: "File Peraturan",
            type: "file",
            placeholder: "Masukkan File Peraturan",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Peraturan",
            type: "text",
            placeholder: "Masukkan Nama Peraturan",
            required: true,
        },
        {
            key: "year",
            label: "Tahun",
            type: "text",
            placeholder: "Masukkan Tahun",
            required: true,
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama Peraturan",
            type: "text",
            placeholder: "Masukkan Nama Peraturan",
            required: true,
        },
        {
            key: "year",
            label: "Tahun",
            type: "text",
            placeholder: "Masukkan Tahun",
            required: true,
        },
        {
            key: "file",
            label: "File Peraturan",
            type: "file",
            placeholder: "Masukkan File Peraturan",
            required: true,
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
