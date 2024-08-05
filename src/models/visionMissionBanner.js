const products = {
    label: "Banner Visi Misi",
    endpoints: {
        lookup: "/vision-mission-carousel/lookup",
        list: "/vision-mission-carousel/list",
        create: "/vision-mission-carousel/create",
        update: "/vision-mission-carousel/update",
        delete: "/vision-mission-carousel/delete",
        detail: "/vision-mission-carousel/show",
    },

    url: {
        list: "/admin/vision-mission-carousel",
        create: "/admin/vision-mission-carousel/tambah",
        update: "/admin/vision-mission-carousel/edit",
        delete: "/delete",
        detail: "/admin/vision-mission-carousel/detail",
    },

    actionConfig: {
        create: true,
        update: true,
        delete: true,
        detail: true,
    },

    createConfig: [
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
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
        },
    ],

    listConfig: [
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
        },
    ],

    detailConfig: [
        {
            key: "image",
            label: "Foto",
            type: "image",
            placeholder: "Masukkan Foto",
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
