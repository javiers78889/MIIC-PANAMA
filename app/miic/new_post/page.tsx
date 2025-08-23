"use client"

import ListaDePost from "@/components/posts/ListaDePost"
import Posteos from "@/components/posts/Posteos"




interface ImageFile {
    id: string
    file: File
    name: string
    preview: string
}

export default function ImageUploadForm() {
   
    return (
        <div className="grid grid-cols-2 justify-center items-center min-h-screen p-4">

            <Posteos/>
            <ListaDePost/>
          
        </div>
    )
}
