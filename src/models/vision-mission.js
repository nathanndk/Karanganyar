const products = {
    label: "Divisi",
    endpoints: {
        lookup: "/vision-mission/lookup",
        list: "/vision-mission/list",
        create: "/vision-mission/create",
        update: "/vision-mission/update",
        delete: "/vision-mission/delete",
        detail: "/vision-mission/show",
    },

    url: {
        list: "/",
        create: "/create",
        update: "/update",
        delete: "/delete",
        detail: "/detail",
    },

    createConfig: [
        {
            key: "title",
            label: "Judul",
            type: "text",
            placeholder: "Masukkan Judul",
        },
        {
            key: "subtitle",
            label: "Sub Judul",
            type: "text",
            placeholder: "Masukkan Sub Judul",
        },
    ],

    updateConfig: [
        {
            key: "vision",
            label: "Visi",
            type: "text",
            placeholder: "Masukkan Visi karangjatih",
        },
        {
            key: "mission",
            label: "Misi",
            type: "text",
            placeholder: "Masukkan Misi karangjatih",
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Produk",
            type: "text",
        },
        {
            key: "code",
            label: "Kode Produk",
            type: "text",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama Produk",
            type: "text",
        },
        {
            key: "code",
            label: "Kode Produk",
            type: "text",
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
