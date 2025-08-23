"use server"

import { PostArraySchema } from "@/src"
import { Envs } from "@/src/envs"

export default async function getpostsaction() {
    const req = await fetch(`${Envs.url}/posts`, { next: { tags: ['post-list']} })

    if (!req.ok) {
        // Si es 404, retornamos array vacío
        if (req.status === 404) return []

    }

    const json = await req.json()

    const parsed = PostArraySchema.safeParse(json)

    if (!parsed.success) {
        return []
    }

    return parsed.data
}
