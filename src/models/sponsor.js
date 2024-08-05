const products = {
    createConfig: [
        {
            key: "name",
            label: "Nama PIC",
            type: "text",
            placeholder: "Masukkan Nama PIC",
        },
        {
            key: "company_name",
            label: "Nama Perusahaan",
            type: "text",
            placeholder: "Masukkan Nama Perusahaan",
        },
        {
            key: "partnership_type",
            label: "Jenis Partnership",
            type: "dropdown-static",
            placeholder: "Masukkan Jenis Partnership",
            requiredFilter: "",
            selectedLabel: "name",
            selectedValue: "name",
            labelValue: "name",
            options: [
                {
                    name: "Media Partner",
                },
                {
                    name: "Sponsor",
                },
            ],
        },
    ],
};

export default products;
