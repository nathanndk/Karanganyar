const products = {
    label: "Kegiatan",
    endpoints: {
        lookup: "/activities/lookup",
        list: "/activities/list",
        create: "/activities/create",
        update: "/activities/update",
        delete: "/activities/delete",
        detail: "/activities/show",
    },

    url: {
        list: "/admin/kegiatan",
        create: "/admin/kegiatan/tambah",
        update: "/admin/kegiatan/edit",
        delete: "/delete",
        detail: "/admin/kegiatan/detail",
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
            label: "Nama Kegiatan",
            type: "text",
            placeholder: "Masukkan Nama Kegiatan",
            required: true,
        },
        {
            key: "slug",
            label: "Slug",
            type: "text",
            placeholder: "Masukkan Slug",
            required: true,
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
            required: true,
        },
        {
            key: "location",
            label: "Nama Lokasi",
            type: "text",
            placeholder: "Masukkan Nama Lokasi",
            required: true,
        },
        {
            key: "url_location",
            label: "Link Lokasi",
            type: "text",
            placeholder: "Masukkan Link Lokasi",
            required: true,
        },
        {
            key: "date",
            label: "Tanggal Kegiatan",
            type: "date",
            placeholder: "Masukkan Tanggal Kegiatan",
            required: true,
        },
        {
            key: "start_time",
            label: "Waktu Mulai",
            type: "time",
            placeholder: "Masukkan Waktu Mulai",
            required: true,
        },
        {
            key: "end_time",
            label: "Waktu Berakhir",
            type: "time",
            placeholder: "Masukkan Waktu Berakhir",
            required: true,
        },
        {
            key: "description",
            label: "Konten Kegiatan",
            type: "texteditor",
            placeholder: "Masukkan Gambar Thumbnail",
            required: true,
        },
    ],

    updateConfig: [
        {
            key: "name",
            label: "Nama Kegiatan",
            type: "text",
            placeholder: "Masukkan Nama Kegiatan",
            required: true,
        },
        {
            key: "slug",
            label: "Slug",
            type: "text",
            placeholder: "Masukkan Slug",
            required: true,
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
            required: true,
        },
        {
            key: "location",
            label: "Nama Lokasi",
            type: "text",
            placeholder: "Masukkan Nama Lokasi",
            required: true,
        },
        {
            key: "url_location",
            label: "Link Lokasi",
            type: "text",
            placeholder: "Masukkan Link Lokasi",
            required: true,
        },
        {
            key: "date",
            label: "Tanggal Kegiatan",
            type: "date",
            placeholder: "Masukkan Tanggal Kegiatan",
            required: true,
        },
        {
            key: "start_time",
            label: "Waktu Mulai",
            type: "time",
            placeholder: "Masukkan Waktu Mulai",
            required: true,
        },
        {
            key: "end_time",
            label: "Waktu Berakhir",
            type: "time",
            placeholder: "Masukkan Waktu Berakhir",
            required: true,
        },
        {
            key: "description",
            label: "Konten Kegiatan",
            type: "texteditor",
            placeholder: "Masukkan Gambar Thumbnail",
            required: true,
        },
    ],

    listConfig: [
        {
            key: "name",
            label: "Nama Kegiatan",
            type: "text",
            placeholder: "Masukkan Nama Kegiatan",
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
        },
    ],

    detailConfig: [
        {
            key: "name",
            label: "Nama Kegiatan",
            type: "text",
            placeholder: "Masukkan Nama Kegiatan",
        },
        {
            key: "slug",
            label: "Slug",
            type: "text",
            placeholder: "Masukkan Slug",
        },
        {
            key: "image",
            label: "Gambar Thumbnail",
            type: "image",
            placeholder: "Masukkan Gambar Thumbnail",
        },
        {
            key: "location",
            label: "Nama Lokasi",
            type: "text",
            placeholder: "Masukkan Nama Lokasi",
        },
        {
            key: "url_location",
            label: "Link Lokasi",
            type: "text",
            placeholder: "Masukkan Link Lokasi",
        },
        {
            key: "date",
            label: "Tanggal Kegiatan",
            type: "date",
            placeholder: "Masukkan Tanggal Kegiatan",
        },
        {
            key: "start_time",
            label: "Waktu Mulai",
            type: "time",
            placeholder: "Masukkan Waktu Mulai",
        },
        {
            key: "end_time",
            label: "Waktu Berakhir",
            type: "time",
            placeholder: "Masukkan Waktu Berakhir",
        },
        {
            key: "description",
            label: "Konten Kegiatan",
            type: "texteditor",
            placeholder: "Masukkan Gambar Thumbnail",
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
