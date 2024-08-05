const products = {
    label: "Divisi",
    endpoints: {
        lookup: "/footer/lookup",
        list: "/footer/list",
        create: "/footer/create",
        update: "/footer/update",
        delete: "/footer/delete",
        detail: "/footer/show",
    },

    url: {
        list: "/",
        create: "/create",
        update: "/update",
        delete: "/delete",
        detail: "/detail",
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
            key: "address",
            label: "Alamat",
            type: "text",
            placeholder: "Masukkan Alamat Instansi",
        },
        {
            key: "phone",
            label: "Nomor Telepon",
            type: "text",
            placeholder: "Masukkan Nomor Telepon",
        },
        {
            key: "instagram",
            label: "Instagram",
            type: "text",
            placeholder: "Masukkan Instagram",
        },
        {
            key: "twitter",
            label: "Twitter",
            type: "text",
            placeholder: "Masukkan link akun Twitter",
        },
        {
            key: "facebook",
            label: "Facebook",
            type: "text",
            placeholder: "Masukkan link akun Facebook",
        },
        {
            key: "youtube",
            label: "Youtube",
            type: "text",
            placeholder: "Masukkan link akun Youtube",
        },
        {
            key: "email",
            label: "Email",
            type: "text",
            placeholder: "Masukkan Alamat Email",
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
