const products = {
    label: "Kategori Kegiatan",
    endpoints: {
        lookup: "/activity-categories/lookup",
        list: "/activity-categories/list",
        create: "/activity-categories/create",
        update: "/activity-categories/update",
        delete: "/activity-categories/delete",
        detail: "/activity-categories/show",
    },

    url: {
        list: "/admin/kategori-kegiatan",
        create: "/admin/kategori-kegiatan/tambah",
        update: "/admin/kategori-kegiatan/edit",
        delete: "/delete",
        detail: "/admin/kategori-kegiatan/detail",
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
            label: "Topik Kegiatan",
            type: "text",
            placeholder: "Masukkan Topik Kegiatan karangjatih",
            required: true,
        },

        {
            key: "image",
            label: "Foto Topik Kegiatan",
            type: "image",
            placeholder: "Masukkan Foto Topik Kegiatan karangjatih",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Topik Kegiatan",
            type: "text",
            placeholder: "Masukkan Topik Kegiatan karangjatih",
            required: true,
        },

        {
            key: "image",
            label: "Foto Topik Kegiatan",
            type: "image",
            placeholder: "Masukkan Foto Topik Kegiatan karangjatih",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Topik Kegiatan",
            type: "text",
            placeholder: "Masukkan Topik Kegiatan karangjatih",
        },

        {
            key: "image",
            label: "Foto Topik Kegiatan",
            type: "image",
            placeholder: "Masukkan Foto Topik Kegiatan karangjatih",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Topik Kegiatan",
            type: "text",
            placeholder: "Masukkan Topik Kegiatan karangjatih",
        },

        {
            key: "image",
            label: "Foto Topik Kegiatan",
            type: "image",
            placeholder: "Masukkan Foto Topik Kegiatan karangjatih",
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
