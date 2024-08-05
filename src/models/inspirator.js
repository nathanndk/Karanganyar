const products = {
    label: "Tokoh Inspirator",
    endpoints: {
        lookup: "/figures/lookup",
        list: "/figures/list",
        create: "/figures/create",
        update: "/figures/update",
        delete: "/figures/delete",
        detail: "/figures/show",
    },

    url: {
        list: "/admin/inspirator/",
        create: "/admin/inspirator/tambah",
        update: "/admin/inspirator/edit",
        delete: "/delete",
        detail: "/admin/inspirator/detail",
    },

    actionConfig: {
        create: false,
        update: true,
        delete: false,
        detail: true,
    },

    createConfig: [
        {
            key: "name",
            label: "Nama Tokoh",
            type: "text",
            placeholder: "Masukkan Nama Tokoh",
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
        },
        {
            key: "description",
            label: "Deskripsi",
            type: "text",
            placeholder: "Masukkan Deskripsi",
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama Tokoh",
            type: "text",
            placeholder: "Masukkan Nama Tokoh",
            required: true,
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
            required: true,
        },
        {
            key: "description",
            label: "Deskripsi",
            type: "text",
            placeholder: "Masukkan Deskripsi",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Tokoh",
            type: "text",
            placeholder: "Masukkan Nama Tokoh",
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
        },
        {
            key: "description",
            label: "Deskripsi",
            type: "textarea",
            placeholder: "Masukkan Deskripsi",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama Tokoh",
            type: "text",
            placeholder: "Masukkan Nama Tokoh",
        },
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
        },
        {
            key: "description",
            label: "Deskripsi",
            type: "text",
            placeholder: "Masukkan Deskripsi",
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
