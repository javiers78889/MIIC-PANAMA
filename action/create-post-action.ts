"use server"

import { PostShema, UserPostSchema } from "@/src"
import { Envs } from "@/src/envs"
import { GetToken } from "@/src/getToken"
import { revalidatePath } from "next/cache"



export const uploadPost = async (formData: FormData) => {

    //conseguir token de localstorage

    const token = await GetToken()


    const data = {
        "file": formData.get("file"),
        "name": formData.get("name")
    }


    const validateForm = UserPostSchema.safeParse(data)


    if (!validateForm.success) {

        const error = validateForm.error.errors.map(e => e.message)
        return error
    }
    const files = new FormData()
    files.append("file", validateForm.data?.file)
    files.append("name", validateForm.data?.name)

    const uploadImage = await fetch(`${Envs.cdn_url}/cdn`, {
        method: "POST",
        body: files,
    })
    const urlcdn = await uploadImage.json()

    console.log(urlcdn)


    // separacion de url y name
    const newImage = `${Envs.cdn_url}${urlcdn.path}`
    const DataImage = {
        url: newImage,
        name: formData.get("name")

    }


    const validateSaveInfo = PostShema.safeParse(DataImage)


    if (!validateSaveInfo.success) {
        const error = validateSaveInfo.error.errors.map(e => e.message)

        return error

    }
    const res = await fetch(`${Envs.url}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(validateSaveInfo.data),
    })
    const jsondos = await res.json()

    if (res.ok) {

        console.log("revalidadndo")
        revalidatePath("/miic/new_post");
    }


    return jsondos
}
