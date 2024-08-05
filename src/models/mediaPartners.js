const products = {
    label: "Media Partner",
    endpoints: {
        lookup: "/partners/lookup",
        list: "/partners/list",
        create: "/partners/create",
        update: "/partners/update",
        delete: "/partners/delete",
        detail: "/partners/show",
    },

    url: {
        list: "/admin/media",
        create: "/admin/media/tambah",
        update: "/admin/media/edit",
        delete: "/delete",
        detail: "/admin/media/detail",
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
            placeholder: "Masukkan Nama",
            required: true,
        },
        {
            key: "image",
            label: "Logo",
            type: "image",
            placeholder: "Masukkan Logo",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
            required:true,
        },
        {
            key: "image",
            label: "Logo",
            type: "image",
            placeholder: "Masukkan Logo",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
        },
        {
            key: "image",
            label: "Logo",
            type: "image",
            placeholder: "Masukkan Logo",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama",
            type: "text",
            placeholder: "Masukkan Nama",
        },
        {
            key: "image",
            label: "Logo",
            type: "image",
            placeholder: "Masukkan Logo",
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
