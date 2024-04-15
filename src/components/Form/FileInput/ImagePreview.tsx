'use client'
import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput()

  const PreviewURL = useMemo(() => {
    if (files.length === 0) return null

    return URL.createObjectURL(files[0])
  }, [files])

  if (PreviewURL === null) {
    return (
      <div className="bg-violet-50 flex size-16 items-center justify-center rounded-full">
        <User className="size-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <img src={PreviewURL} alt="" className="size-16 rounded-full object-cover" />
    )
  }

}