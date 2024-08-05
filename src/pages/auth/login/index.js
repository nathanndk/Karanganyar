import { Button, Spinner, Alert, Card } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import React, { useState } from "react";
import AuthModels from "@/models/auth";
import Form from "@/components/organism/BaseCrud/Post";
import api from "@/api/index";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Login() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    function changeData(item, value) {
        setData((prevData) => ({
            ...prevData,
            [item]: value,
        }));
    }

    async function submitForm(data) {
        setIsLoading(true);
        setError("");
        try {
            const response = await api.post(AuthModels.endpoints.login, data);
            if (response.status === 200) {
                Cookies.set("token", response.data.data.token);
                Cookies.set("user", JSON.stringify(response.data.data.profile));
                router.push("/admin/sejarah");
            } else {
                setError("Failed to login. Please check your credentials.");
            }
        } catch (error) {
            setError("An error occurred during login.");
        }
        setIsLoading(false);
    }

    return (
        <div className="min-h-screen flex">
            <div className="w-full md:w-2/5 flex flex-col justify-center items-center px-12">
                <h1 className="text-4xl font-bold text-orange-500">
                    Admin Panel
                </h1>
                <p className="text-gray-500 mb-5">
                    Silahkan Login untuk memulai sesi anda
                </p>
                {error && (
                    <Alert color="failure" icon={HiInformationCircle}>
                        <span className="font-medium">Login failed!</span>{" "}
                        {error}
                    </Alert>
                )}
                <Form
                    label="Login"
                    changeData={changeData}
                    data={data}
                    postConfig={AuthModels.loginConfig}
                />
                <button
                    className="w-full flex flex-row items-center justify-center text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-4 py-2 h-auto mt-4"
                    onClick={() => submitForm(data)}
                >
                    {isLoading ? <Spinner aria-label="Loading" /> : "Login"}
                </button>
            </div>
            <div className="hidden md:flex md:w-3/5 bg-orange-500 items-center justify-center">
                <Image
                    src="/images/balai-karangjati.jpg"
                    alt="Hero Image"
                    className="object-cover w-full h-full"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
