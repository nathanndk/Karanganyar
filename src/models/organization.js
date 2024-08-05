const products = {
    label: "Perangkat Desa",
    endpoints: {
        lookup: "/organization/lookup",
        list: "/organization/list",
        create: "/organization/create",
        update: "/organization/update",
        delete: "/organization/delete",
        detail: "/organization/show",
    },

    url: {
        list: "/admin/perangkat-desa",
        create: "/admin/perangkat-desa/tambah",
        update: "/admin/perangkat-desa/edit",
        delete: "/delete",
        detail: "/admin/perangkat-desa/detail",
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
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
            required: true,
        },

        {
            key: "subtitle",
            label: "Jabatan",
            type: "text",
            placeholder: "Masukkan Jabatan",
            required: true,
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "title",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
            required: true,
        },

        {
            key: "subtitle",
            label: "Jabatan",
            type: "text",
            placeholder: "Masukkan Jabatan",
            required: true,
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "title",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
            required: true,
        },

        {
            key: "subtitle",
            label: "Jabatan",
            type: "text",
            placeholder: "Masukkan Jabatan",
            required: true,
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
            required: true,
        },
    ],

    detailConfig: [
        {
            key: "title",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
            required: true,
        },

        {
            key: "subtitle",
            label: "Jabatan",
            type: "text",
            placeholder: "Masukkan Jabatan",
            required: true,
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
            required: true,
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
