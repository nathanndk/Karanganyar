const products = {
    label: "Nilai-nilai karangjatih",
    endpoints: {
        lookup: "/core-values/lookup",
        list: "/core-values/list",
        create: "/core-values/create",
        update: "/core-values/update",
        delete: "/core-values/delete",
        detail: "/core-values/show",
    },

    url: {
        list: "/admin/nilai-nilai",
        create: "/admin/nilai-nilai/tambah",
        update: "/admin/nilai-nilai/edit",
        delete: "/delete",
        detail: "/admin/nilai-nilai/detail",
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
            label: "Nama Nilai",
            type: "text",
            placeholder: "Masukkan Nilai karangjatih",
            required: true,
        },

        {
            key: "image",
            label: "Foto Nilai-nilai",
            type: "image",
            placeholder: "Masukkan Foto Nilai-nilai karangjatih",
            required: true,
        },
        {
            key: "description",
            label: "Deskripsi Nilai",
            type: "textarea",
            placeholder: "Masukkan Deskripsi Nilai karangjatih",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama Nilai",
            type: "text",
            placeholder: "Masukkan Nilai karangjatih",
            required: true,
        },

        {
            key: "image",
            label: "Foto Nilai-nilai",
            type: "image",
            placeholder: "Masukkan Foto Nilai-nilai karangjatih",
            required: true,
        },
        {
            key: "description",
            label: "Deskripsi Nilai",
            type: "text",
            placeholder: "Masukkan Deskripsi Nilai karangjatih",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Nilai",
            type: "text",
            placeholder: "Masukkan Nilai karangjatih",
        },

        {
            key: "image",
            label: "Foto Nilai-nilai",
            type: "image",
            placeholder: "Masukkan Foto Nilai-nilai karangjatih",
        },
        {
            key: "description",
            label: "Deskripsi Nilai",
            type: "text",
            placeholder: "Masukkan Deskripsi Nilai karangjatih",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama Nilai",
            type: "text",
            placeholder: "Masukkan Nilai karangjatih",
        },

        {
            key: "image",
            label: "Foto Nilai-nilai",
            type: "image",
            placeholder: "Masukkan Foto Nilai-nilai karangjatih",
        },
        {
            key: "description",
            label: "Deskripsi Nilai",
            type: "text",
            placeholder: "Masukkan Deskripsi Nilai karangjatih",
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
