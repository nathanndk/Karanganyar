const products = {
    label: "Sponsor",
    endpoints: {
        lookup: "/partners/lookup",
        list: "/partners/list",
        create: "/partners/create",
        update: "/partners/update",
        delete: "/partners/delete",
        detail: "/partners/show",
    },

    url: {
        list: "/admin/sponsor/",
        create: "/admin/sponsor/tambah",
        update: "/admin/sponsor/edit",
        delete: "/delete",
        detail: "/admin/sponsor/detail",
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
        {
            key: "is_primary",
            label: "Jenis Sponsorship",
            type: "dropdown-static",
            placeholder: "Masukkan Jenis Sponsorship",
            requiredFilter: "",
            selectedLabel: "name",
            selectedValue: "value",
            labelValue: "name",
            options: [
                {
                    value: true,
                    name: "Utama",
                },
                {
                    value: false,
                    name: "Non Utama",
                },
            ],
        },
    ],

    updateConfig: [
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
        {
            key: "is_primary",
            label: "Jenis Sponsorship",
            type: "static-enum",
            selectedLabel: "name",
            selectedValue: "value",
            labelValue: "name",
            options: [
                {
                    value: true,
                    name: "Utama",
                },
                {
                    value: false,
                    name: "Non Utama",
                },
            ],
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
