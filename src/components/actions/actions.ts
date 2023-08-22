"use server"

import { SearchResult } from "@/types/types"
import cloudinary from "cloudinary"


export async function CreateFolder(folder: string, image: SearchResult) {
  const newFolder = await cloudinary.v2.api.create_folder(folder)
  await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${image.public_id}`)
}