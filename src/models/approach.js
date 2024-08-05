const models = {
    label: "Pendekatan",
    endpoints: {
        lookup: "/activity-concept/lookup",
        list: "/activity-concept/list",
        create: "/activity-concept/create",
        update: "/activity-concept/update",
        delete: "/activity-concept/delete",
        detail: "/activity-concept/show",
    },

    url: {
        list: "/",
        create: "/admin/approach/tambah",
        update: "/admin/approach/edit",
        delete: "/delete",
        detail: "/admin/approach/detail",
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
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Pendekatan",
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
            type: "textarea",
            placeholder: "Masukkan Deskripsi",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Pendekatan",
            type: "text",
            placeholder: "Masukkan Pendekatan",
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
            type: "textarea",
            placeholder: "Masukkan Deskripsi",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Pendekatan",
            type: "text",
            placeholder: "Masukkan Pendekatan",
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

    detailConfig: [
        {
            key: "name",
            label: "Pendekatan",
            type: "text",
            placeholder: "Masukkan Pendekatan",
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

export default models;
